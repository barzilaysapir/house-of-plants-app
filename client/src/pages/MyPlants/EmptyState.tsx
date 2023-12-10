import { Button, Stack } from "@mui/material";
import schefflera from "assets/images/schefflera_paint.png";
import i18n from "i18next";
import { FC } from "react";

type EmptyStateProps = {
    handleOpen: () => void;
};

const EmptyState: FC<EmptyStateProps> = (props) => {
    const { handleOpen } = props;

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
            <Button variant="contained" color="primary" onClick={handleOpen}>
                {i18n.t("myPlants.emptyState")}
            </Button>

            <img
                width="100%"
                alt="Schefflera plant"
                src={schefflera}
                style={{ maxWidth: 300, opacity: 0.9 }}
            />
        </Stack>
    );
};

export default EmptyState;
