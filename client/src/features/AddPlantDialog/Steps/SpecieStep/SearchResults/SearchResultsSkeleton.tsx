import { CardSkeleton } from "components/Card";
import { FC } from "react";
import { CardImageSize } from "shared/types/card";
import StyledStep from "../../Step.style";

const SearchResultsSkeleton: FC = () => {
    return (
        <StyledStep>
            {new Array(5).fill(0).map((_, index) => (
                <CardSkeleton key={index} size={CardImageSize.SMALL} />
            ))}
        </StyledStep>
    );
};

export default SearchResultsSkeleton;
