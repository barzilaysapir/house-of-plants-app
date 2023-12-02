import { Stack } from "@mui/material";
import { ChangeEvent, FC } from "react";
import SearchInput from "./SearchInput";
import ViewPicker from "./ViewPicker";
import { CardView } from "shared/types/card";

type MyPlantsProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
    view: CardView;
    onChangeView: (
        event: React.MouseEvent<HTMLElement>,
        newView: CardView
    ) => void;
};

const MyPlantsToolbar: FC<MyPlantsProps> = (props) => {
    const { onSearchPlant, view, onChangeView } = props;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <SearchInput onSearchPlant={onSearchPlant} />
            <ViewPicker view={view} onChangeView={onChangeView} />
        </Stack>
    );
};

export default MyPlantsToolbar;
