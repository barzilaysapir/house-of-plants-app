import { Toolbar, Container } from '@mui/material';
import UserSettings from './UserSettings';
import PagesMenu from './PagesMenu';
import Logo from 'components/Logo/component';
import { User } from 'shared/types/Users';
import { FC } from 'react';
import StyledTopNav from './style';

type TopNavProps = {
    userInfo: User;
};

const TopNav: FC<TopNavProps> = (props) => {
    const { userInfo } = props

    return (
        <StyledTopNav position="relative" color='inherit'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <PagesMenu />
                    <Logo />
                    <UserSettings {...userInfo} />

                </Toolbar>
            </Container>
        </StyledTopNav>
    );
}

export default TopNav;
