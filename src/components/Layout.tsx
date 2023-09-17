import { Box, Divider } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";
import { User } from "shared/types/User";

type LayoutProps = {
    children: ReactNode;
    userInfo: User | null;
};

const Layout = (props: LayoutProps) => {
    const { children, userInfo } = props;

    return (
        <Box>
            {userInfo ?
                <Header {...userInfo} />
                :
                <div>
                    Sign in to see your plants
                </div>
            }
            {children}
        </Box>
    );
}

export default Layout;
