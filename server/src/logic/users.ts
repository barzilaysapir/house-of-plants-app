import { getAllUsers, addUser, getUserById } from "models/users";

export const fetchAllUsers = async () => {
    return await getAllUsers();
};

export const fetchUserById = async (id: string) => {
    return await getUserById(id);
};

export const fetchAddUser = async (user: any) => {
    return await addUser(user);
};
