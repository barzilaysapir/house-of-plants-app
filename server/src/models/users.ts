import { getDb } from "utils/db";
import { ObjectId, UpdateFilter } from "mongodb";
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

export const getUserById = async (id: string) => {
    const usersCollection = getUsersCollection();

    const isGoogleId = false;
    const query = {
        ...(isGoogleId
            ? {
                  googleId: id,
              }
            : {
                  _id: new ObjectId(id),
              }),
    };

    const response = await usersCollection.findOne(query);
    return response;
};

export const getUsersPlants = async (id: string) => {
    const user = await getUserById(id);
    return user?.plants;
};

export const addUsersPlant = async (userId: string, plant: any) => {
    type UserDocument = {
        _id: string;
        plants?: any[];
    };

    const { id, ...plantAttrs } = plant;
    const result = await getUsersCollection().findOneAndUpdate(
        { _id: new ObjectId(userId) },
        {
            $push: {
                plants: {
                    id: new ObjectId(),
                    plantId: id,
                    ...plantAttrs,
                },
            } as UpdateFilter<UserDocument>,
        },
        { upsert: true }
    );
    return result.value?.plants;
};

export const addUser = async (user: any) => {
    const response = await getUsersCollection().insertOne(user);
    return response;
};
