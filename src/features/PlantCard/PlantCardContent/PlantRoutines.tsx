import { Stack } from "@mui/material";
import { FC } from "react";
import { PLANT_ROUTINES } from "../PlantCard.util";
import { PlantCare } from "shared/types/Plants";
import PlantRoutineButton from "./PlantRoutineButton";

type PlantRoutinesProps = {
    name: string;
    care: PlantCare;
};

const PlantRoutines: FC<PlantRoutinesProps> = (props) => {
    const { name, care } = props;

    return (
        //  replace marginTop with "auto"
        <Stack direction="row" justifyContent="center" gap={2} marginTop={1.5}>
            {PLANT_ROUTINES.map((routine, index) => (
                <PlantRoutineButton
                    key={index}
                    name={name}
                    routine={routine}
                    care={care[routine.id]}
                />
            ))}
        </Stack>
    );
};

export default PlantRoutines;
