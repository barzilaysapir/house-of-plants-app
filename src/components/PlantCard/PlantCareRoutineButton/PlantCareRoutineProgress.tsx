import { CircularProgress } from "@mui/material";
import { FC } from "react";

type PlantCareRoutineProgressProps = {
    next: number;
    freq: number;
};

const PlantCareRoutineProgress: FC<PlantCareRoutineProgressProps> = (props) => {
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

export default PlantCareRoutineProgress;
