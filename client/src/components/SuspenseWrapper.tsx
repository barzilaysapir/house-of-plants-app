import { FC } from "react";
import { Outlet, useNavigation } from "react-router";
import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

const StyledSuspenseWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const SuspenseWrapper: FC = () => {
    const { state } = useNavigation();

    if (state === "loading")
        return (
            <StyledSuspenseWrapper>
                <CircularProgress thickness={5} size={50} />
            </StyledSuspenseWrapper>
        );

    return <Outlet />;
};

export default SuspenseWrapper;
