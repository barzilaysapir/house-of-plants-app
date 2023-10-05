const useLocalStorage = () => {
    const user = localStorage.getItem("user");

    return {
        user: user || JSON.stringify({ _id: "65180e81467c696f0911b0ed" }),
    };
};

export default useLocalStorage;
