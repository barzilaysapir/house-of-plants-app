import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";
import { User } from "shared/types/User";

type LayoutProps = {
    children: ReactNode;
    userInfo: User;
};

const Layout = (props: LayoutProps) => {
    const { children, userInfo } = props;

    return (
        <Box>
            <Header {...userInfo} />
            {children}
        </Box>
    );
}

export default Layout;
