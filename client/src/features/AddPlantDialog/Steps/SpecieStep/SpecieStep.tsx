import { Divider, Chip } from "@mui/material";
import i18n from "i18next";
import IdentifyPlant from "features/AddPlantDialog/IdentifyPlant";
import SearchResults from "./SearchResults/SearchResults";
import { FC } from "react";
import useSpecieStep from "./useSpecieStep";
import StyledSpecieStep from "./SpecieStep.style";
import SpecieStepSearch from "./SpecieStepSearch";

const SpecieStep: FC = () => {
    const { searchInputVal, handleChange, selectPlant } = useSpecieStep();

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
