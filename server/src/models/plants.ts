import { Document, ObjectId, WithId } from "mongodb";
import { getDb } from "utils/db";
import { Plant } from "utils/types/plants";

const getCollection = () => getDb().collection("users");

export const getPlantById = async (id: string): Promise<WithId<Document>> => {
    const _id = new ObjectId(id);
    try {
        const user = await getCollection().findOne({
            "plants.id": _id,
        });
        if (!user) throw new Error(`User with plant id "${id}" not found`);
        const plant = user.plants.find((plant: Plant) => plant.id.equals(_id));
        return plant;
    } catch (error) {
        throw error;
    }
};
