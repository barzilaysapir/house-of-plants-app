import { Avatar, AvatarProps, styled } from "@mui/material";
import { green } from "@mui/material/colors";
import { FC } from "react";
import i18n from "i18next";

type UserAvatarProps = AvatarProps & {
    picture: string;
    small?: boolean;
};

const StyledAvatar = styled(Avatar, {
    shouldForwardProp: (prop) => prop !== "small",
})<{ small?: boolean }>(({ small }) =>
    small ? "width: 24px; height: 24px;" : ""
);

const UserAvatar: FC<UserAvatarProps> = (props) => {
    const { picture, ...avatarProps } = props;
    return (
        <StyledAvatar
            sx={{ bgcolor: green[500] }}
            alt={i18n.t("userHeader.avatarAlt")}
            src={picture}
            imgProps={{
                referrerPolicy: "no-referrer",
            }}
            {...avatarProps}
        />
    );
};

export default UserAvatar;
