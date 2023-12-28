import { Stack } from "@mui/material";
import { ChangeEvent, FC, MouseEvent } from "react";
import SearchInput from "./SearchInput";
import ViewPicker from "./ViewPicker";
import { CardView } from "shared/types/card";

type PlantsToolbarProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
    view: CardView;
    onChangeView: (event: MouseEvent<HTMLElement>, newView: CardView) => void;
};

const PlantsToolbar: FC<PlantsToolbarProps> = (props) => {
    const { onSearchPlant, view, onChangeView } = props;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <SearchInput onSearchPlant={onSearchPlant} />
            <ViewPicker view={view} onChangeView={onChangeView} />
        </Stack>
    );
};

export default PlantsToolbar;
