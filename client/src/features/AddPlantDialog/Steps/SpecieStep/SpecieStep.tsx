import { Divider, Chip } from "@mui/material";
import i18n from "i18next";
import IdentifyPlant from "./IdentifyPlant";
import SearchResults from "./SearchResults/SearchResults";
import { FC } from "react";
import useSpecieStep from "./useSpecieStep";
import StyledSpecieStep from "./SpecieStep.style";
import SpecieStepSearch from "./SpecieStepSearch";
import { AddPlantData } from "features/AddPlantDialog/AddPlantDialog.types";

type SpecieStepProps = {
    handleNextStep: (stepData?: Partial<AddPlantData>) => void;
};

const SpecieStep: FC<SpecieStepProps> = (props) => {
    const { handleNextStep } = props;

    const { searchInputVal, handleChange, selectPlant } = useSpecieStep({
        handleNextStep,
    });

    return (
        <StyledSpecieStep>
            <SpecieStepSearch onChange={handleChange} />

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
        </StyledSpecieStep>
    );
};

export default SpecieStep;
