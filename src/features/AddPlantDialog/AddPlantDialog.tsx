import { Chip, Dialog, Divider } from "@mui/material";
import { FC } from "react";
import SlideUpTransition from "components/Transition/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader/DialogHeader";
import { StyledAddPlantDialogContent } from "./AddPlantDialog.style";
import IdentifyPlant from "./IdentifyPlant";
import SearchPlant from "./SearchPlant";
import SearchResults from "./SearchResults";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideUpTransition}
        >
            <DialogHeader
                title={i18n.t("addPlants.title")}
                handleClose={handleClose}
            />

            <StyledAddPlantDialogContent>
                <SearchPlant />
                <SearchResults />
                <Divider>
                    <Chip label={i18n.t("or")} />
                </Divider>
                <IdentifyPlant />
            </StyledAddPlantDialogContent>
        </Dialog>
    );
};

export default AddPlantDialog;
