import { Chip, Divider } from "@mui/material";
import { FC, useState } from "react";
import SlideUpTransition from "components/Transition/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader/DialogHeader";
import StyledAddPlantDialog, {
    StyledAddPlantDialogContent,
} from "./AddPlantDialog.style";
import IdentifyPlant from "./IdentifyPlant";
import SearchPlant from "./SearchPlant";
import SearchResults from "./SearchResults";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;
    const [searchInputVal, setSearchInputVal] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(event.target.value);
    };

    return (
        <StyledAddPlantDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideUpTransition}
            $searching={Boolean(searchInputVal)}
        >
            <DialogHeader
                title={i18n.t("addPlants.title")}
                handleClose={handleClose}
            />

            <StyledAddPlantDialogContent>
                <SearchPlant onChange={handleChange} />
                {searchInputVal ? (
                    <SearchResults searchInputVal={searchInputVal} />
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
