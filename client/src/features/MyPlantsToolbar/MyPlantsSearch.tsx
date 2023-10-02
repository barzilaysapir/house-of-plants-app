import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { Search } from "@mui/icons-material";
import i18n from "i18next";

type MyPlantsSearchProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MyPlantsSearch: FC<MyPlantsSearchProps> = (props) => {
    const { onSearchPlant } = props;

    return (
        <TextField
            onChange={onSearchPlant}
            placeholder={i18n.t("myPlants.searchPlaceholder")}
            fullWidth
            variant="standard"
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

export default MyPlantsSearch;
