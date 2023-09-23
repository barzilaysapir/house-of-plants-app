import { USER } from "mocks/User";

const getUserInfo = async () => {
    // const response = await fetch('/api/user');
    // const data = await response.json();
    const data = USER;
    await new Promise(resolve => setTimeout(resolve, 1000));
    return data;
}

export const appLoader = async () => {
    return await getUserInfo();
}
