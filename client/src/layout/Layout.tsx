import { Container } from "@mui/material";
import { FC, ReactNode } from "react";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <div>
            <TopNav />
            <Container maxWidth="xl">{children}</Container>
            <BottomNav />
        </div>
    );
};

export default Layout;
