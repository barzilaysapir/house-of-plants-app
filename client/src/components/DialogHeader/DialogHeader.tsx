import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import i18n from "i18next";

type DialogHeaderProps = {
    title: string | JSX.Element;
    handleClose?: () => void;
};

const DialogHeader: FC<DialogHeaderProps> = (props) => {
    const { title, handleClose } = props;

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                    {title}
                </Typography>

                {handleClose && (
                    <IconButton
                        edge="start"
                        onClick={handleClose}
                        aria-label={i18n.t("close")}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default DialogHeader;
