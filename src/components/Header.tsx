import { Avatar, Box, Typography, css } from "@mui/material";
import { green } from "@mui/material/colors";
import { User } from "shared/types/User";
import UserImage from "mocks/images/user.jpg"

type HeaderProps = User;

const Header = (props: HeaderProps) => {
    const { initials, title } = props;

    return (
        <Box
            component="header"
            dir="ltr"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography
                variant="h5"
                component="span"
                color={green[500]}
                fontFamily="Dancing Script, cursive"
            >
                Hi {title}!
            </Typography>
            <Avatar
                sx={{ bgcolor: green[500] }}
                alt="Remy Sharp"
                src={UserImage}
            >
                {initials}
            </Avatar>
        </Box >
    );
}

export default Header;
