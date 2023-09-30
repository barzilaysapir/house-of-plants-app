import { Box, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import { StyledPageWrapper } from "./Layout.style";
import { useLoaderData } from "react-router-dom";
import { User } from "shared/types/Users";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <Box>
            <TopNav />

            <Container maxWidth="xl">
                <StyledPageWrapper>{children}</StyledPageWrapper>
            </Container>

            <BottomNav />
        </Box>
    );
};

export default Layout;
