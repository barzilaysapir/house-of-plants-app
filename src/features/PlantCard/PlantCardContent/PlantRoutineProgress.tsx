import { CircularProgress } from "@mui/material";
import { FC } from "react";

type PlantRoutineProgressProps = {
    next: number;
    freq: number;
};

const PlantRoutineProgress: FC<PlantRoutineProgressProps> = (props) => {
    const { next, freq } = props;

    return (
        <>
            <CircularProgress
                variant="determinate"
                value={100}
                sx={{
                    position: "absolute",
                    color: "lightgrey",
                }}
                thickness={1}
            />
            <CircularProgress
                variant="determinate"
                value={(next / freq) * 100}
                sx={{ position: "absolute" }}
                color="inherit"
                thickness={2}
            />
        </>
    );
};

export default PlantRoutineProgress;
