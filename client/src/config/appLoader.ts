const getUserInfo = async () => {
    const userId = "6511949f623d2d4732a58991";
    // const userId = "65118d05623d2d4732a5898f";
    try {
        const res = await fetch(`${process.env.REACT_APP_API}/users/${userId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const appLoader = async () => {
    return await getUserInfo();
};
