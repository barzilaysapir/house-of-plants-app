import { Search } from "@mui/icons-material";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import i18n from "i18next";

type SearchPlantProps = Pick<TextFieldProps, "onChange">;

const SearchPlant: FC<SearchPlantProps> = (props) => {
    const { onChange } = props;

    return (
        <TextField
            onChange={onChange}
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
            focused
        />
    );
};

export default SearchPlant;
