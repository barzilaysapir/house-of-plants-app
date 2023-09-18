import { Box, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import { User } from "shared/types/User";
import TopNav from "./TopNav/TopNav";
import BottomNavbar from "./BottomNavbar";
import UserHeader from "./UserHeader";

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
                {/* <UserHeader {...userInfo} /> */}
                <Box sx={{ padding: "10px 5px" }}>
                    {children}
                </Box>
            </Container>

            <BottomNavbar />
        </Box>
    );
}

export default Layout;
