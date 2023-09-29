import { FC } from "react";
import i18n from "i18next";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import LogoWhite from "assets/icons/logo_white.png";
import LogoGreen from "assets/icons/logo_green.png";
import { StyledSignInContent } from "./SignIn.styles";
import useSignIn from "./useSignIn";

const SignInContent: FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const { onSuccess, onFailure } = useSignIn();

    return (
        <StyledSignInContent square={isMobile} isMobile={isMobile}>
            <Typography
                variant="h1"
                color={isMobile ? "white" : ""}
                fontFamily="'Fuggles', cursive"
            >
                {i18n.t("signIn.title")}
            </Typography>

            <img
                src={isMobile ? LogoWhite : LogoGreen}
                width="200px"
                alt="logo"
            />

            <Typography
                variant="h4"
                component="p"
                color={isMobile ? "white" : ""}
                marginY={2}
                fontFamily="'Fuggles', cursive"
                fontWeight={700}
            >
                {i18n.t("signIn.subtitle")}
            </Typography>

            <GoogleLogin
                theme={isMobile ? "outline" : "filled_black"}
                onSuccess={onSuccess}
                onError={onFailure}
            />
        </StyledSignInContent>
    );
};

export default SignInContent;
