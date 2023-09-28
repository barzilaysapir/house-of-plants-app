import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";
import { mutate } from "swr";
import { GOOGLE_CLIENT_ID } from "temp";

const Login = () => {
    const onSuccess = (
        res: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        const googleUserProfile = (res as GoogleLoginResponse).profileObj;
        console.log("LOGIN SUCCESS! Current user: ", googleUserProfile);
        mutate(`/users/${googleUserProfile.googleId}`, {
            body: {
                ...googleUserProfile,
            },
        });
    };

    const onFailure = (error: any) => {
        console.log("LOGIN FAILED! error: ", error);
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="LOGIN"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                isSignedIn={true}
            />
        </div>
    );
};

export default Login;
