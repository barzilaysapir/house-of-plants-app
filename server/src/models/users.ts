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

export const getUserById = async (id: string) => {
    return await getUsersCollection().findOne({
        _id: new ObjectId(id),
    });
};

export const addUser = async (user: any) => {
    const response = await getUsersCollection().insertOne(user);
    return response;
};
