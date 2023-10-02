import { useState } from "react";
import { PlantView } from "shared/types/plantCard";

const usePlantsView = () => {
    const [view, setView] = useState(PlantView.CARDS);

    const onChangeView = (
        event: React.MouseEvent<HTMLElement>,
        newView: PlantView
    ) => {
        if (newView) setView(newView);
    };

    return {
        view,
        onChangeView,
    };
};

export default usePlantsView;
