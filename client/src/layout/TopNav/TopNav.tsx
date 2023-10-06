import { Toolbar, Container, useTheme, useMediaQuery } from "@mui/material";
import SettingsMenu from "./Menus/SettingsMenu";
import PagesMenu from "./Menus/PagesMenu";
import Logo from "components/Logo";
import { FC } from "react";
import StyledTopNav from "./TopNav.style";

const TopNav: FC = () => {
    const theme = useTheme();
    const showLogo = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <StyledTopNav>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    {showLogo && <Logo />}
                    <PagesMenu />
                    <SettingsMenu />
                </Toolbar>
            </Container>
        </StyledTopNav>
    );
};

export default TopNav;
