const useLocalStorage = () => {
    const setItem = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const user = localStorage.getItem("user");

    return {
        setToLocalStorage: setItem,
        user:
            user ||
            JSON.stringify({ _id: "65180e81467c696f0911b0ed", sites: [] }),
    };
};

export default useLocalStorage;
