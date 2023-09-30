import { getDb } from "utils/db";
import { ObjectId } from "mongodb";
import { GoogleUserData } from "utils/types/googleUser";
import axios from "axios";

const getUsersCollection = () => getDb().collection("users");

export const getAllUsers = async () => {
    return await getUsersCollection().find().toArray();
};

export const googleUserAuth = async (token: string) => {
    let fetchToken;
    try {
        fetchToken = await axios.get(
            "https://www.googleapis.com/oauth2/v3/tokeninfo",
            {
                params: {
                    id_token: token.split(" ")[1],
                },
            }
        );
    } catch (err) {
        throw err;
    }
    const { email, name, picture }: GoogleUserData = fetchToken.data;
    const user = await getUsersCollection().findOneAndUpdate(
        { email: email },
        {
            $set: {
                name,
                email,
                image: picture,
            },
        },
        { upsert: true }
    );
    return user.value;
};

export const getUserById = async (id: string, user: any) => {
    const usersCollection = getUsersCollection();

    const isGoogleId = true;
    const query = {
        ...(isGoogleId
            ? {
                  googleId: id,
              }
            : {
                  _id: new ObjectId(id),
              }),
    };

    const update = {
        $setOnInsert: {
            ...user,
        },
    };
    const options = { upsert: true, returnOriginal: false };

    // const response = await usersCollection.findOne(query);
    const response = await usersCollection.findOneAndUpdate(
        query,
        update,
        options
    );
    // console.log(response);
    return response;
};

export const addUser = async (user: any) => {
    const response = await getUsersCollection().insertOne(user);
    return response;
};
