import { Divider, Chip } from "@mui/material";
import i18n from "i18next";
import IdentifyPlant from "./IdentifyPlant";
import SearchResults from "./SearchResults/SearchResults";
import { FC } from "react";
import useSpeciesStep from "./useSpeciesStep";
import StyledSpeciesStep from "./SpeciesStep.style";
import SpeciesStepSearch from "./SpeciesStepSearch";
import { AddPlantData } from "features/AddPlantDialog/AddPlantDialog.types";

type SpeciesStepProps = {
    handleNextStep: (stepData?: Partial<AddPlantData>) => void;
};

const SpeciesStep: FC<SpeciesStepProps> = (props) => {
    const { handleNextStep } = props;

    const { searchInputVal, handleChange, selectPlant } = useSpeciesStep({
        handleNextStep,
    });

    return (
        <StyledSpeciesStep>
            <SpeciesStepSearch onChange={handleChange} />

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
        </StyledSpeciesStep>
    );
};

export default SpeciesStep;
