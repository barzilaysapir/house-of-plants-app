import { GoogleLogout } from "react-google-login";

const Logout = () => {
    const onSuccess = () => {
        console.log("Log out successfull!");
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={
                    "191768196113-s7275bjfqb7o2fgj2egatjnpdm7llmeb.apps.googleusercontent.com"
                }
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;
