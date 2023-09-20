import { Box, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import { User } from "shared/types/Users";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import { StyledPageWrapper } from "./Layout.style";

type LayoutProps = {
    children: ReactNode;
    userInfo: User;
};

const Layout: FC<LayoutProps> = (props) => {
    const { children, userInfo } = props;

    return (
        <Box>
            <TopNav userInfo={userInfo} />

            <Container maxWidth="xl">
                <StyledPageWrapper>
                    {children}
                </StyledPageWrapper>
            </Container>

            <BottomNav />
        </Box>
    );
}

export default Layout;