import { Stack } from "@mui/material";
import { FC } from "react";
import PlantCardSkeleton from "features/PlantCard/PlantCardSkeleton";
import { PlantImageSize } from "shared/types/plantCard";

const SearchResultsSkeleton: FC = () => {
    return (
        <Stack spacing={1} sx={{ overflow: "auto" }}>
            {new Array(5).fill(0).map((_, index) => (
                <PlantCardSkeleton key={index} size={PlantImageSize.SMALL} />
            ))}
        </Stack>
    );
};

export default SearchResultsSkeleton;
