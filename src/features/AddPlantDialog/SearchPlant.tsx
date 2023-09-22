import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import i18n from "i18next";

type SearchPlantProps = {};

const SearchPlant: FC<SearchPlantProps> = (props) => {
    return (
        <TextField
            label={i18n.t("addPlants.searchByName")}
            size="small"
            margin="normal"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
            fullWidth
            focused
        />
    );
};

export default SearchPlant;
