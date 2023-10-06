import * as Models from "models/users";

export const getUserById = async (id: string) => {
    return await Models.getUserById(id);
};

export const getUsersPlants = async (id: string) => {
    return await Models.getUsersPlants(id);
};

export const googleUserAuth = async (token: string) => {
    return await Models.googleUserAuth(token);
};

export const addUsersPlant = async (userId: string, plant: any) => {
    return await Models.addUsersPlant(userId, plant);
};
