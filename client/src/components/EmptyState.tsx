import { Button, Stack } from "@mui/material";
import ScheffleraImg from "assets/images/schefflera_paint.png";
import { FC } from "react";
import { CallToAction } from "shared/types/UI";

type EmptyStateProps = {
    handleOpen: () => void;
    callToAction?: CallToAction;
};

const EmptyState: FC<EmptyStateProps> = (props) => {
    const { handleOpen, callToAction } = props;

    return (
        <Stack
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
                height: "70%",
                justifyContent: "center",
                backgroundColor: "ThreeDFace",
            }}
        >
            {callToAction && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    {callToAction.label}
                </Button>
            )}

            <img
                width="100%"
                alt="Schefflera plant"
                src={ScheffleraImg}
                style={{ maxWidth: 300, opacity: 0.9 }}
            />
        </Stack>
    );
};

export default EmptyState;
