import { getDb } from "utils/db";
import { ObjectId } from "mongodb";
import { OAuth2Client } from "google-auth-library";

const getUsersCollection = () => getDb().collection("users");

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    "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",
    "http://localhost:3000/"
);

export const getAllUsers = async () => {
    return await getUsersCollection().find().toArray();
};

export const googleUserAuth = async (token: string, session: any) => {
    let ticket: any;
    try {
        ticket = await client.verifyIdToken({
            idToken: token.split(" ")[1].trim(),
            audience: process.env.GOOGLE_CLIENT_ID,
            // maxExpiry: "?"
        });
        console.log("ticket", JSON.stringify(ticket));
    } catch (err) {
        console.log(err);
    }

    const userData = ticket.getPayload();
    console.log("userData", userData);
    if (!userData) throw new Error("No user data");

    const user = await getUsersCollection().updateOne(
        { email: userData.email },
        { $set: userData },
        { upsert: true }
    );

    session.userId = user.upsertedId.toString();
    return user;
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
    console.log(user);

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
