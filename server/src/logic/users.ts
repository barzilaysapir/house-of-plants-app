import * as Models from "models/users";
import { Plant } from "utils/types/plants";

export const getUserById = async (id: string) => {
    return await Models.getUserById(id);
};

export const getUsersPlants = async (id: string) => {
    return await Models.getUsersPlants(id);
};

export const getUserSites = async (id: string) => {
    return await Models.getUserSites(id);
};

export const googleUserAuth = async (token: string) => {
    return await Models.googleUserAuth(token);
};

export const addUsersPlant = async (userId: string, plant: Plant) => {
    return await Models.addUsersPlant(userId, plant);
};

export const addUserSite = async (userId: string, site: Plant) => {
    return await Models.addUsersSite(userId, site);
};
