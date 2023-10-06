import { Container } from "@mui/material";
import { FC, ReactNode } from "react";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import StyledLayout from "./Layout.styles";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <StyledLayout maxWidth="xl" sx={{ paddingX: { xs: 0 } }}>
            <TopNav />
            <Container sx={{ pb: 10 }} maxWidth={false}>
                {children}
            </Container>
            <BottomNav />
        </StyledLayout>
    );
};

export default Layout;
