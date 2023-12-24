import * as Model from "models/plants";

export const getPlantById = async (id: string) => {
    return await Model.getPlantById(id);
};
