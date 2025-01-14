import { getDb } from "utils/db";
import { Document, ObjectId, UpdateFilter, WithId } from "mongodb";
import { GoogleUserData } from "utils/types/googleUser";
import axios from "axios";
import { Plant } from "utils/types/plants";
import { Site } from "utils/types/sites";

const getUsersCollection = () => getDb().collection("users");

export const getUserById = async (
    id: string | ObjectId
): Promise<WithId<Document> | null> => {
    try {
        if (typeof id === "string") id = new ObjectId(id);
        return await getUsersCollection().findOne({ _id: id });
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

export const getUserSites = async (id: string) => {
    try {
        const user = await getUserById(id);
        return user?.sites || [];
    } catch (error) {
        throw error;
    }
};

const createUser = async (googleUserData: Partial<GoogleUserData>) => {
    return await getUsersCollection().insertOne({
        ...googleUserData,
        plants: [],
        sites: [],
        settings: {},
    });
};

export const googleUserAuth = async (token: string) => {
    try {
        const fetchToken = await axios.get(Bun.env.GOOGLE_AUTH_API!, {
            params: {
                id_token: token.split(" ")[1],
            },
        });

        const { name, email, picture }: GoogleUserData = fetchToken.data;
        const googleUserData = { name, email, picture };

        let userId = (await getUsersCollection().findOne({ email }))?._id;
        if (!userId) {
            userId = (await createUser(googleUserData)).insertedId;
        } else {
            await getUsersCollection().updateOne(
                { email },
                { $set: googleUserData }
            );
        }

        const updatedUser = await getUserById(userId);
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

export const addUsersPlant = async (
    userId: string,
    plant: any
): Promise<UpdateFilter<Document>> => {
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
                        speciesId: id,
                        primaryName: common_name,
                        secondaryName: scientific_name[0],
                        scientificName: scientific_name[0],
                        thumbnail: default_image?.thumbnail,
                        image: default_image?.regular_url,
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

export const addUsersSite = async (
    userId: string,
    site: any
): Promise<UpdateFilter<Document>> => {
    type UserDocument = {
        _id: string;
        sites?: Site[];
    };
    try {
        const { name } = site;
        const result = await getUsersCollection().findOneAndUpdate(
            { _id: new ObjectId(userId) },
            {
                $push: {
                    sites: {
                        id: new ObjectId(),
                        name,
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
