import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { Search } from "@mui/icons-material";
import i18n from "i18next";

type SearchInputProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = (props) => {
    const { onSearchPlant } = props;

    return (
        <TextField
            onChange={onSearchPlant}
            placeholder={i18n.t("myPlants.searchPlaceholder")}
            fullWidth
            variant="standard"
            type="search"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchInput;
