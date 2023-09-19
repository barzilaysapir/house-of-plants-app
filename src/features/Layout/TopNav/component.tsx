import { Toolbar, Container, AppBar } from '@mui/material';
import UserSettings from './UserSettings';
import PagesMenu from './PagesMenu';
import Logo from 'components/Logo/component';
import { User } from 'shared/types/Users';
import { FC } from 'react';

type TopNavProps = {
    userInfo: User;
};

const TopNav: FC<TopNavProps> = (props) => {
    const { userInfo } = props

    return (
        <AppBar position="sticky">
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
