import { Avatar, Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { User } from "shared/types/User";
import UserImage from "mocks/images/user.jpg"
import LOCALE from "shared/utils/Locale";

type UserHeaderProps = User;

const UserHeader = (props: UserHeaderProps) => {
    const { initials, title } = props;

    const GREETING = LOCALE.formatString(LOCALE.userHeader.greeting, title)

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
                {GREETING}
            </Typography>
            <Avatar
                sx={{ bgcolor: green[500] }}
                alt={LOCALE.userHeader.avatarAlt}
                src={UserImage}
            >
                {initials}
            </Avatar>
        </Box >
    );
}

export default UserHeader;
