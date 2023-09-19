import { AppBar, Button, Divider, IconButton, List, ListItem, ListItemText, Slide, Toolbar, Typography } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { FC, ReactElement, Ref, forwardRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import StyledAddPlantDialog from "./style";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
}

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    return (
        <StyledAddPlantDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Sound
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>

            {/* <List>  */}
        </StyledAddPlantDialog>
    )
};

export default AddPlantDialog;
