import { CredentialResponse } from "./SignIn.types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "shared/hooks/useLocalStorage";
import { Route } from "shared/types/route";

const useSignIn = () => {
    const navigate = useNavigate();
    const { setToLocalStorage } = useLocalStorage();

    const onSuccess = async (credentialResponse: CredentialResponse) => {
        const res = await fetch(`${process.env.REACT_APP_API}/users/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${credentialResponse.credential}`,
            },
        });
        const data = await res.json();
        setToLocalStorage("user", data);
        navigate(Route.HOME);
    };

    const onFailure = () => {
        console.log("LOGIN FAILED");
    };

    return {
        onSuccess,
        onFailure,
    };
};

export default useSignIn;
