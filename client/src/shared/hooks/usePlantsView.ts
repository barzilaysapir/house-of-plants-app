import { useState } from "react";
import { CardView } from "shared/types/card";

const usePlantsView = () => {
    const [view, setView] = useState<CardView>(CardView.CARDS);

    const onChangeView = (
        event: React.MouseEvent<HTMLElement>,
        newView: CardView
    ) => {
        if (newView) setView(newView);
    };

    return {
        view,
        onChangeView,
    };
};

export default usePlantsView;
