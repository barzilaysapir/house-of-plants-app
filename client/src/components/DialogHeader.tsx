import { AppBar, DialogTitle, IconButton } from "@mui/material";
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
            <DialogTitle variant="h6" component="h3" sx={{ ml: 2 }}>
                {title}
            </DialogTitle>

            {handleClose && (
                <IconButton
                    onClick={handleClose}
                    aria-label={i18n.t("close")}
                    sx={{ marginInlineEnd: 2 }}
                >
                    <CloseIcon />
                </IconButton>
            )}
        </AppBar>
    );
};

export default DialogHeader;
