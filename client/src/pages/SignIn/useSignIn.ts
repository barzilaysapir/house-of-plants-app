import { useSWRConfig } from "swr";
import { CredentialResponse } from "./SignIn.types";
import { useNavigate } from "react-router-dom";
// googleLogout();

const useSignIn = () => {
    const { mutate } = useSWRConfig();
    const navigate = useNavigate();

    const onSuccess = async (credentialResponse: CredentialResponse) => {
        await fetch(`${process.env.REACT_APP_API}/users/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${credentialResponse.credential}`,
            },
        });
        // await mutate(`${process.env.REACT_APP_API}/users/auth`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `${credentialResponse.credential}`,
        //     },
        // });
        localStorage.setItem("token", credentialResponse.credential!);
        navigate("/myPlants");
    };

    const onFailure = () => {
        console.log("LOGIN FAILED");
    };

    return {
        onSuccess,
        onFailure,
        // login,
    };
};

export default useSignIn;
