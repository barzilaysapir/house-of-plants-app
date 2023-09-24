import { Search } from "@mui/icons-material";
import { InputAdornment, TextField, debounce } from "@mui/material";
import { ChangeEvent, FC } from "react";
import i18n from "i18next";

type SearchPlantProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchPlant: FC<SearchPlantProps> = (props) => {
    const { onChange } = props;

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
            size="small"
            margin="normal"
            fullWidth
        />
    );
};

export default SearchPlant;
