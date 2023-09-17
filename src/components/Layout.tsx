import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import UserHeader from "./UserHeader";
import { User } from "shared/types/User";

type LayoutProps = {
    children: ReactNode;
    userInfo: User;
};

const Layout: FC<LayoutProps> = (props) => {
    const { children, userInfo } = props;

    return (
        <Box>
            <UserHeader {...userInfo} />
            <Box>
                {children}
            </Box>
        </Box>
    );
}

export default Layout;
