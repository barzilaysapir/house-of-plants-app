import { Button, Stack, Typography } from "@mui/material";
import ScheffleraImg from "assets/images/schefflera_paint.png";
import { FC } from "react";
import { CallToAction } from "shared/types/UI";

type EmptyStateProps =
    | {
          text: string;
          handleOpen?: never;
          callToAction?: never;
      }
    | {
          handleOpen: () => void;
          callToAction: CallToAction;
          text?: never;
      };

const EmptyState: FC<EmptyStateProps> = (props) => {
    const { handleOpen, callToAction, text } = props;

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
            {callToAction ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    {callToAction.label}
                </Button>
            ) : (
                <Typography variant="body2">{text}</Typography>
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
