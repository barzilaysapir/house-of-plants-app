// import { GoogleLogout } from "react-google-login";

// TODO: [HOP-45] clean this component
const Logout = () => {
    const onSuccess = () => {
        console.log("Log out successfull!");
    };

    return (
        <div id="signOutButton">
            {/* <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            /> */}
        </div>
    );
};

export default Logout;
