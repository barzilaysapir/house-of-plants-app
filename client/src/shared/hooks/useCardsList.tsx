import { CardView } from "shared/types/card";
import { CardImageSize } from "shared/types/card";

type UseCardsListProps = {
    view: CardView;
};

const useCardsList = (props: UseCardsListProps) => {
    const { view } = props;

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
        isCardVertical,
        getGridColumns,
        getImageSize,
    };
};

export default useCardsList;
