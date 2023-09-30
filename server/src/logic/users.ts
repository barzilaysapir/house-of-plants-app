import * as Models from "models/users";

export const fetchAllUsers = async () => {
    return await Models.getAllUsers();
};

export const googleUserAuth = async (token: string) => {
    return await Models.googleUserAuth(token);
};

export const fetchUserById = async (id: string, user: any) => {
    return await Models.getUserById(id, user);
};

export const fetchAddUser = async (user: any) => {
    return await Models.addUser(user);
};
