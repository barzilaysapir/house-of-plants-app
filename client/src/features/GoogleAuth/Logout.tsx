import { GoogleLogout } from "react-google-login";

const Logout = () => {
    const onSuccess = () => {
        console.log("Log out successfull!");
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={process.env.GOOGLE_CLIENT_ID!}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;
