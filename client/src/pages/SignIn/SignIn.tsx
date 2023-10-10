import { FC } from "react";
import { Box, Modal } from "@mui/material";
import SignInContent from "./SignInContent";
import { StyledSignInModal } from "./SignIn.styles";
import useActiveDevice from "shared/hooks/useActiveDevice";

type MyPlantsProps = {};

const SignIn: FC<MyPlantsProps> = (props) => {
    const { isMobile } = useActiveDevice();

    return (
        <Modal open={true} disableAutoFocus>
            <StyledSignInModal $isMobile={isMobile} direction="row">
                {isMobile ? (
                    <SignInContent isMobile={true} />
                ) : (
                    <>
                        <Box className="desktop-wrapper">
                            <SignInContent isMobile={false} />
                        </Box>
                        <Box className="desktop-image" />
                    </>
                )}
            </StyledSignInModal>
        </Modal>
    );
};

export default SignIn;
