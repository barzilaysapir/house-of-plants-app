import { Chip, Divider } from "@mui/material";
import { FC, useState } from "react";
import SlideUpTransition from "components/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";
import StyledAddPlantDialog, {
    StyledAddPlantDialogContent,
} from "./AddPlantDialog.style";
import IdentifyPlant from "./IdentifyPlant";
import SearchPlant from "./SearchPlant";
import SearchResults from "./SearchResults";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useAddUsersPlant from "shared/hooks/useAddUsersPlant";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;
    const [searchInputVal, setSearchInputVal] = useState<string>("");

    const { user } = useLocalStorage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(event.target.value);
    };

    const onClose = () => {
        setSearchInputVal("");
        handleClose();
    };

    const { fetchAddPlant } = useAddUsersPlant({
        userId: JSON.parse(user!)._id,
        onAddComplete: onClose,
    });

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
                        fetchAddPlant={fetchAddPlant}
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
