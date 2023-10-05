import { Stack } from "@mui/material";
import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import PlantCard from "features/PlantCard/PlantCard";
import { Plant } from "shared/types/plants";
import PlantCardSkeleton from "features/PlantCard/PlantCardSkeleton";
import { PlantImageSize } from "shared/types/plantCard";

type SearchResultsProps = {
    searchInputVal: string;
    fetchAddPlant: (plant: Plant) => void;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal, fetchAddPlant } = props;

    const { data, loading, error } = useFetchData({
        key: "plantsSearch",
        url: `/species/search?q=${searchInputVal}`,
        trigger: searchInputVal,
    });

    if (loading)
        return (
            <>
                {new Array(6).fill(0).map((_, index) => (
                    <PlantCardSkeleton
                        key={index}
                        size={PlantImageSize.SMALL}
                    />
                ))}
            </>
        );
    if (error) return <div>Error</div>;
    if (!data?.length) return <>No Data</>;

    return (
        <Stack spacing={1}>
            {data.map((item: Plant) => (
                <PlantCard
                    key={item.id}
                    plant={item}
                    size={PlantImageSize.SMALL}
                    onClick={fetchAddPlant}
                />
            ))}
        </Stack>
    );
};

export default SearchResults;
