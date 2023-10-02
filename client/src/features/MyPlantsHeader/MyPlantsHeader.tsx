import { FC } from "react";
import PageHeader from "components/PageHeader";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import i18n from "i18next";

type MyPlantsHeaderProps = {
    myPlantsAmount: number;
    handleOpen: () => void;
};

const MyPlantsHeader: FC<MyPlantsHeaderProps> = (props) => {
    const { myPlantsAmount, handleOpen } = props;

    return (
        <PageHeader
            title={
                <>
                    {i18n.t("myPlants.title")}
                    <Typography
                        display="inline-block"
                        variant="subtitle1"
                        color="textSecondary"
                        marginX={1}
                    >
                        ({myPlantsAmount})
                    </Typography>
                </>
            }
            callToAction={{
                endIcon: <AddIcon sx={{ marginInlineStart: 1 }} />,
                onClick: handleOpen,
                label: i18n.t("myPlants.addButton"),
                "aria-label": i18n.t("myPlants.addButtonAlt"),
            }}
        />
    );
};

export default MyPlantsHeader;
