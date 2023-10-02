import { Toolbar, Container } from "@mui/material";
import SettingsMenu from "./Menus/SettingsMenu";
import PagesMenu from "./Menus/PagesMenu";
import Logo from "components/Logo";
import { FC } from "react";
import StyledTopNav from "./TopNav.style";

type TopNavProps = {};

const TopNav: FC<TopNavProps> = (props) => {
    return (
        <StyledTopNav>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />
                    <PagesMenu />
                    <SettingsMenu />
                </Toolbar>
            </Container>
        </StyledTopNav>
    );
};

export default TopNav;
