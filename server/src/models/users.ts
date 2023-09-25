import { getDb } from "utils/db";

const addUser = async (user: any) => {
    const db = getDb();
    const usersCollection = db.collection("users");
    //add user to collection
    const response = await usersCollection.insertOne(user);
    console.log(response);
};
