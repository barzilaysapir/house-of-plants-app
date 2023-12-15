import {
    Preview,
    Edit,
    LocationCity,
    Notifications,
    Info,
} from "@mui/icons-material";
import { MenuOption } from "shared/types/UI";
import { CardView } from "shared/types/card";
import { CardImageSize } from "shared/types/card";

type UseMyPlantsListProps = {
    view: CardView;
};

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: "Preview",
        link: "/preview",
        icon: <Preview />,
    },
    {
        name: "Edit Plant",
        link: "/edit",
        icon: <Edit />,
    },
    {
        name: "Change Site",
        link: "/edit/site",
        icon: <LocationCity />,
    },
    {
        name: "Reminders",
        link: "/edit/reminders",
        icon: <Notifications />,
    },
    {
        name: "Specie Info",
        link: "/specie",
        icon: <Info />,
    },
];

const useMyPlantsList = (props: UseMyPlantsListProps) => {
    const { view } = props;

    const showPlantRoutines = view !== CardView.ROWS;
    const isCardVertical = view === CardView.GRID;

    const getGridColumns = () => {
        switch (view) {
            case CardView.GRID:
                return { xs: 2, sm: 3, md: 4, lg: 5 };
            default:
                return { xs: 1, sm: 1, md: 2, lg: 3 };
        }
    };

    const getImageSize = () => {
        switch (view) {
            case CardView.ROWS:
                return CardImageSize.SMALL;
            default:
                return CardImageSize.MEDIUM;
        }
    };

    return {
        showPlantRoutines,
        isCardVertical,
        getGridColumns,
        getImageSize,
    };
};

export default useMyPlantsList;
