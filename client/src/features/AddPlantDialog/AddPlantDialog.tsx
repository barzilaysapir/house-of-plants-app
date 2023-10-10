import { Chip, Divider } from "@mui/material";
import { FC } from "react";
import SlideUpTransition from "components/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";
import StyledAddPlantDialog, {
    StyledAddPlantDialogContent,
} from "./AddPlantDialog.style";
import IdentifyPlant from "./IdentifyPlant";
import AddPlantDialogSearch from "./AddPlantDialogSearch";
import SearchResults from "./SearchResults/SearchResults";
import useAddPlantDialog from "./useAddPlantDialog";
import useActiveDevice from "shared/hooks/useActiveDevice";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    const { onClose, searchInputVal, handleChange, selectPlant } =
        useAddPlantDialog({ handleClose });

    const { isMobile } = useActiveDevice();

    return (
        <StyledAddPlantDialog
            fullScreen={isMobile}
            open={open}
            onClose={onClose}
            TransitionComponent={SlideUpTransition}
            disableRestoreFocus
            fullWidth
        >
            <DialogHeader
                title={i18n.t("addPlants.title")}
                handleClose={onClose}
            />

            <AddPlantDialogSearch onChange={handleChange} />

            <StyledAddPlantDialogContent>
                {searchInputVal ? (
                    <SearchResults
                        searchInputVal={searchInputVal}
                        selectPlant={selectPlant}
                    />
                ) : (
                    <>
                        <Divider>
                            <Chip label={i18n.t("or")} />
                        </Divider>
                        <IdentifyPlant />
                    </>
                )}
            </StyledAddPlantDialogContent>
        </StyledAddPlantDialog>
    );
};

export default AddPlantDialog;
