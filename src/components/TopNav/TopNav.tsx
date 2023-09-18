import { Toolbar, Container, AppBar } from '@mui/material';
import UserSettings from './components/UserSettings';
import Logo from '../Logo';
import PagesMenu from './components/PagesMenu';
import { User } from 'shared/types/User';
import { FC } from 'react';

type TopNavProps = {
    userInfo: User;
};

const TopNav: FC<TopNavProps> = (props) => {
    const { userInfo } = props

    return (
        <AppBar position="relative" color='inherit' sx={{ backgroundColor: "inherit", boxShadow: "none" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <PagesMenu />
                    <Logo />
                    <UserSettings {...userInfo} />

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopNav;
