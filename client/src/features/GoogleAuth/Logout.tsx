import { GoogleLogout } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "temp";

const Logout = () => {
    const onSuccess = () => {
        console.log("Log out successfull!");
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;
