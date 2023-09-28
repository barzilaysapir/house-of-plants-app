import { getDb } from "utils/db";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        initials: {
            type: String,
            required: true,
        },
        image: {
            type: String || null,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        amountOfPlants: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

const getUsersCollection = () => getDb().collection("users");

export const getAllUsers = async () => {
    return await getUsersCollection().find().toArray();
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
