import { FC } from "react";
import { Box, Modal, useMediaQuery, useTheme } from "@mui/material";
import SignInContent from "./SignInContent";
import { StyledSignInModal } from "./SignIn.styles";

type MyPlantsProps = {};

const SignIn: FC<MyPlantsProps> = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Modal open={true} disableAutoFocus>
            <StyledSignInModal isMobile={isMobile} direction="row">
                {isMobile ? (
                    <SignInContent />
                ) : (
                    <>
                        <Box className="desktop-wrapper">
                            <SignInContent />
                        </Box>
                        <Box className="desktop-image" />
                    </>
                )}
            </StyledSignInModal>
        </Modal>
    );
};

export default SignIn;
