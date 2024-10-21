import { Toolbar, Container } from "@mui/material";
import SettingsMenu from "./Menus/SettingsMenu";
import PagesMenu from "./Menus/PagesMenu";
import Logo from "components/Logo";
import { FC } from "react";
import useActiveDevice from "shared/hooks/useActiveDevice";

const TopNav: FC = () => {
    const { isMobile } = useActiveDevice();

    return (
        <Container maxWidth={false}>
            <Toolbar disableGutters>
                {isMobile && <Logo />}
                <PagesMenu />
                <SettingsMenu />
            </Toolbar>
        </Container>
    );
};

export default TopNav;
