import { FC } from "react";
import i18n from "i18next";
import { Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import LogoWhite from "assets/icons/logo_white.png";
import LogoGreen from "assets/icons/logo_green.png";
import LogoCircle from "assets/icons/logo_circle.png";
import LogoLeaf from "assets/icons/logo_leaf.png";
import LogoLeafCircle from "assets/icons/logo_leaf_circle.png";
import LogoCircle2 from "assets/icons/logo_option2.png";
import { StyledSignInContent } from "./SignIn.styles";
import useSignIn from "./useSignIn";

type SignInContentProps = {
    isMobile: boolean;
};

const SignInContent: FC<SignInContentProps> = (props) => {
    const { isMobile } = props;
    const { onSuccess, onFailure } = useSignIn();

    return (
        <StyledSignInContent square={true} $isMobile={isMobile}>
            <img
                src={LogoLeaf}
                width="150px"
                alt="logo"
                style={{
                    display: isMobile ? "none" : "block",
                    opacity: 0.9,
                    filter: "drop-shadow(0 0 3px #548d52)",
                }}
            />

            <Typography
                variant={isMobile ? "h1" : "h2"}
                component="h1"
                color="#dce7d8"
                fontFamily="'Dancing Script', cursive"
            >
                {i18n.t("signIn.title", {
                    count: Number(isMobile),
                })}
            </Typography>

            <Typography
                variant={isMobile ? "subtitle1" : "subtitle2"}
                color="#dce7d8"
                marginBottom={{ md: 3 }}
            >
                {i18n.t("signIn.subtitle")}
            </Typography>

            <img
                src={LogoCircle2}
                width="130px"
                alt="logo"
                style={{
                    display: isMobile ? "block" : "none",
                    opacity: 0.95,
                    filter: "drop-shadow(0 0 2px #346433)",
                    marginBlock: "2rem",
                }}
            />

            <GoogleLogin
                theme={isMobile ? "outline" : "filled_blue"}
                shape="pill"
                logo_alignment="center"
                // locale=""
                width={isMobile ? 250 : ""}
                onSuccess={onSuccess}
                onError={onFailure}
                useOneTap
            />
        </StyledSignInContent>
    );
};

export default SignInContent;
