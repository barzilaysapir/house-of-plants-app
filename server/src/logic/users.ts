import { getAllUsers, addUser, getUserById } from "models/users";

export const fetchAllUsers = async () => {
    return await getAllUsers();
};

export const fetchUserById = async (id: string, user: any) => {
    return await getUserById(id, user);
};

export const fetchAddUser = async (user: any) => {
    return await addUser(user);
};
