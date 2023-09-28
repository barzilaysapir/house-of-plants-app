const getUserInfo = async () => {
    const userId = "65154888467c696f09521dd4";
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
