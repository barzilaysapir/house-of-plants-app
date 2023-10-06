import { Chip, Divider } from "@mui/material";
import { FC } from "react";
import SlideUpTransition from "components/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";
import StyledAddPlantDialog, {
    StyledAddPlantDialogContent,
} from "./AddPlantDialog.style";
import IdentifyPlant from "./IdentifyPlant";
import SearchPlant from "./SearchPlant";
import SearchResults from "./SearchResults/SearchResults";
import useAddPlantDialog from "./useAddPlantDialog";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    const { onClose, searchInputVal, handleChange, selectPlant } =
        useAddPlantDialog({ handleClose });

    return (
        <StyledAddPlantDialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={SlideUpTransition}
            $searching={Boolean(searchInputVal)}
        >
            <DialogHeader
                title={i18n.t("addPlants.title")}
                handleClose={onClose}
            />

            <StyledAddPlantDialogContent>
                <SearchPlant onChange={handleChange} />
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
