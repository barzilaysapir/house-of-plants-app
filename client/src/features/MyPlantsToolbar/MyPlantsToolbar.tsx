import { Box } from "@mui/material";
import { ChangeEvent, FC } from "react";
import MyPlantsSearch from "./MyPlantsSearch";

type MyPlantsProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MyPlantsToolbar: FC<MyPlantsProps> = (props) => {
    const { onSearchPlant } = props;

    return (
        <Box>
            <MyPlantsSearch onSearchPlant={onSearchPlant} />
        </Box>
    );
};

export default MyPlantsToolbar;
