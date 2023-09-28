import { Box, Modal } from "@mui/material";
import Login from "features/GoogleAuth/Login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { GOOGLE_CLIENT_ID } from "temp";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        gapi.load("client:auth2", startGoogleAuth);
    }, []);

    const startGoogleAuth = () => {
        gapi.auth2
            .init({
                client_id: GOOGLE_CLIENT_ID,
                scope: "",
            })
            .then(async () => {
                let authInstance = await gapi.auth2.getAuthInstance();
                if (authInstance) {
                    navigate("/");
                    console.log("Google Auth initialized.");
                } else {
                    console.warn("Failed to initialize Google Auth.");
                }
            })
            .catch((err: any) => {
                console.error("Error initializing Google Auth:", err);
            });
    };

    return (
        <Modal open={true}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    textAlign: "center",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Login />
            </Box>
        </Modal>
    );
};

export default GoogleAuth;
