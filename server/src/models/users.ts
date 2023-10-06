import { getDb } from "utils/db";
import { ObjectId, UpdateFilter } from "mongodb";
import { GoogleUserData } from "utils/types/googleUser";
import axios from "axios";
import { Plant } from "utils/types/plants";

const getUsersCollection = () => getDb().collection("users");

export const getUserById = async (id: string) => {
    try {
        return await getUsersCollection().findOne({ _id: new ObjectId(id) });
    } catch (error) {
        throw error;
    }
};

export const getUsersPlants = async (id: string) => {
    try {
        const user = await getUserById(id);
        return user?.plants || [];
    } catch (error) {
        throw error;
    }
};

export const googleUserAuth = async (token: string) => {
    try {
        const fetchToken = await axios.get(Bun.env.GOOGLE_AUTH_API!, {
            params: {
                id_token: token.split(" ")[1],
            },
        });
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
    } catch (error) {
        throw error;
    }
};

export const addUsersPlant = async (userId: string, plant: any) => {
    type UserDocument = {
        _id: string;
        plants?: Plant[];
    };
    try {
        const { id, common_name, scientific_name, default_image } = plant;
        const result = await getUsersCollection().findOneAndUpdate(
            { _id: new ObjectId(userId) },
            {
                $push: {
                    plants: {
                        id: new ObjectId(),
                        plantId: id,
                        primaryName: scientific_name[0],
                        secondaryName: common_name,
                        scientificName: scientific_name[0],
                        image: default_image?.thumbnail,
                        // TODO: remove mock
                        care: CARE_MOCK,
                    },
                } as UpdateFilter<UserDocument>,
            },
            { upsert: true }
        );
        return result;
    } catch (error) {
        throw error;
    }
};

const CARE_MOCK = {
    fertilize: {
        freq: 5,
        next: 3,
        last: 2,
        info: [],
    },
    water: {
        freq: 5,
        next: 3,
        last: 2,
        info: [],
    },
    mist: {
        freq: 5,
        next: 3,
        last: 2,
        info: [],
    },
};
