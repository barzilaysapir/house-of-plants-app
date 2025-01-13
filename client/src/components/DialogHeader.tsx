import { AppBar, DialogTitle, IconButton } from "@mui/material";
import { FC, ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";
import i18n from "config/locales/i18n";

type DialogHeaderProps = {
    title: string | ReactElement;
} & (
    | {
          closable: true;
          handleClose: () => void;
      }
    | {
          closable?: never;
          handleClose?: never;
      }
);

const DialogHeader: FC<DialogHeaderProps> = (props) => {
    const { title, closable, handleClose } = props;

    return (
        <AppBar>
            <DialogTitle variant="h6" component="h3" sx={{ ml: 2 }}>
                {title}
            </DialogTitle>

            {closable && (
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
