import { Dialog } from "@mui/material";
import DialogHeader from "components/DialogHeader/DialogHeader";
import Login from "features/GoogleAuth/Login";
import Logout from "features/GoogleAuth/Logout";

const GoogleAuth = () => {
    return (
        <Dialog open={true}>
            <DialogHeader title="google Auth" />
            <Login />
            <Logout />
        </Dialog>
    );
};

export default GoogleAuth;
