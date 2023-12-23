import { Search } from "@mui/icons-material";
import { InputAdornment, TextField, debounce } from "@mui/material";
import { ChangeEvent, FC } from "react";
import i18n from "i18next";
import useActiveDevice from "shared/hooks/useActiveDevice";

type SpeciesStepSearchProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SpeciesStepSearch: FC<SpeciesStepSearchProps> = (props) => {
    const { onChange } = props;

    const { isMobile } = useActiveDevice();

    return (
        <TextField
            onChange={debounce(onChange, 300)}
            label={i18n.t("addPlants.searchByName")}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
            type="search"
            size="small"
            margin="normal"
            autoFocus={!isMobile}
            sx={{ mx: 3 }}
        />
    );
};

export default SpeciesStepSearch;
