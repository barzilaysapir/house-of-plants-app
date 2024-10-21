import { FC, PropsWithChildren } from "react";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import StyledLayout, { StyledLayoutChildren } from "./Layout.style";

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <StyledLayout maxWidth="xl" sx={{ paddingX: { xs: 0 } }}>
            <TopNav />
            <StyledLayoutChildren maxWidth={false}>
                {children}
            </StyledLayoutChildren>
            <BottomNav />
        </StyledLayout>
    );
};

export default Layout;
