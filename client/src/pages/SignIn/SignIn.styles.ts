import { Paper, Stack, styled } from "@mui/material";
import BgImage from "assets/images/welcome_image.jpg";

type StyledSignInProps = {
    isMobile: boolean;
};

export const StyledSignInModal = styled(Stack)<StyledSignInProps>(
    ({ isMobile }) => ({
        width: "100%",

        ...(isMobile
            ? {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  height: "calc(100% - 120px)",
              }
            : {
                  height: "100%",
                  bgcolor: "background.paper",
              }),

        "& .desktop-wrapper": {
            p: 4,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(#333333, #333333)",
        },
        "& .desktop-image": {
            backgroundImage: `linear-gradient(#000000c3, #0000006e), url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "180%",
        },
    })
);

export const StyledSignInContent = styled(Paper)<StyledSignInProps>(
    ({ isMobile }) => ({
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        ...(isMobile && {
            background: `linear-gradient(#000000c3, #0000006e), url(${BgImage})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }),
    })
);
