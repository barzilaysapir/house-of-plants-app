import { mutate } from "swr";
import { CredentialResponse } from "./SignIn.types";
// googleLogout();
// import { useGoogleLogin } from "@react-oauth/google";

const useSignIn = () => {
    // const login = useGoogleLogin({
    //     ux_mode: "redirect",
    //     flow: "auth-code",
    //     redirect_uri: "http://localhost:3000",
    // });

    const onSuccess = async (credentialResponse: CredentialResponse) => {
        console.log("credentialResponse", credentialResponse);

        const res = await fetch(`${process.env.REACT_APP_API}/users/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `${credentialResponse.credential}`,
                Authorization: `Bearer ${credentialResponse.credential}`,
            },
        });

        // const res = await mutate(`/auth/google`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `${credentialResponse.credential}`,
        //     },
        // });
        const data = await res.json();

        console.log("data", data);
        // store returned user somehow
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
