import { PlantView } from "shared/types/plantCard";
import { PlantImageSize } from "shared/types/plantCard";

type UseMyPlantsListProps = {
    view: PlantView;
};

const useMyPlantsList = (props: UseMyPlantsListProps) => {
    const { view } = props;

    const showPlantRoutines = view !== PlantView.ROWS;
    const isCardVertical = view === PlantView.GRID;

    const getGridColumns = () => {
        switch (view) {
            case PlantView.GRID:
                return { xs: 2, sm: 3, lg: 5 };
            default:
                return { xs: 1, sm: 2, lg: 3 };
        }
    };

    const getImageSize = () => {
        switch (view) {
            case PlantView.ROWS:
                return PlantImageSize.SMALL;
            default:
                return PlantImageSize.MEDIUM;
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
