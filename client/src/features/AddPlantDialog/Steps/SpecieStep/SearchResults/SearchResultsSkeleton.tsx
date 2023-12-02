import { Stack } from "@mui/material";
import CardSkeleton from "components/Card/CardSkeleton";
import { FC } from "react";
import { CardImageSize } from "shared/types/card";

const SearchResultsSkeleton: FC = () => {
    return (
        <Stack spacing={1} sx={{ overflow: "auto" }}>
            {new Array(5).fill(0).map((_, index) => (
                <CardSkeleton key={index} size={CardImageSize.SMALL} />
            ))}
        </Stack>
    );
};

export default SearchResultsSkeleton;
