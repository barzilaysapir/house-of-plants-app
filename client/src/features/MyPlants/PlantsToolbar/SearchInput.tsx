import { InputAdornment, TextField, styled } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { Search } from "@mui/icons-material";
import i18n from "i18next";

const StyledTextField = styled(TextField)`
    .MuiInputBase-input {
        padding-block: 8px;
    }
`;

type SearchInputProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = (props) => {
    const { onSearchPlant } = props;

    return (
        <StyledTextField
            onChange={onSearchPlant}
            placeholder={i18n.t("myPlants.searchPlaceholder")}
            fullWidth
            variant="outlined"
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
