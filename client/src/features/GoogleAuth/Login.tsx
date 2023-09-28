import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";

const Login = () => {
    const onSuccess = (
        res: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        console.log(
            "LOGIN SUCCESS! Current user: ",
            (res as GoogleLoginResponse).profileObj
        );
    };

    const onFailure = (error: any) => {
        console.log("LOGIN FAILED! error: ", error);
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={process.env.GOOGLE_CLIENT_ID!}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
};

export default Login;
