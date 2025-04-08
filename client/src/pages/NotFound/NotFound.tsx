import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Route } from "shared/types/route";
import Logo from "components/Logo";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                gap: 3,
                p: 2,
                textAlign: "center"
            }}
        >
            <Box sx={{ transform: 'scale(3)', mb: 2 }}>
                <Logo />
            </Box>
            <Typography variant="h4" component="h1">
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Oops! The page you're looking for doesn't exist.
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate(Route.MY_PLANTS)}
            >
                Go to My Plants
            </Button>
        </Box>
    );
};

export default NotFound;
