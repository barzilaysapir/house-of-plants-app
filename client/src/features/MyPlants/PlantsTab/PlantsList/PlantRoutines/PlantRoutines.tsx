import { Stack } from "@mui/material";
import { FC } from "react";
import { PLANT_ROUTINES } from "features/PlantCard/PlantCard.util";
import { PlantCare } from "shared/types/plants";
import PlantRoutineButton from "./PlantRoutineButton";

type PlantRoutinesProps = {
    name: string;
    care: PlantCare;
};

const PlantRoutines: FC<PlantRoutinesProps> = (props) => {
    const { name, care } = props;

    return (
        <Stack direction="row" justifyContent="center" gap={2}>
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
