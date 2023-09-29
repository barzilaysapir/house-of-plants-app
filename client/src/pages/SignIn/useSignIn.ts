import { CredentialResponse } from "./SignIn.types";
// googleLogout();
// import { useGoogleLogin } from "@react-oauth/google";

const useSignIn = () => {
    // const login = useGoogleLogin({
    //     ux_mode: "redirect",
    //     flow: "auth-code",
    //     redirect_uri: "http://localhost:3000",
    // });

    const onSuccess = (credentialResponse: CredentialResponse) => {
        console.log(credentialResponse);
        // const googleUserProfile = (res as GoogleLoginResponse).profileObj;
        // console.log("LOGIN SUCCESS! Current user: ", googleUserProfile);
        // mutate(`/users/${googleUserProfile.googleId}`, {
        //     body: {
        //         ...googleUserProfile,
        //     },
        // });
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
