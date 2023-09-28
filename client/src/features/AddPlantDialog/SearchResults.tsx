import { Stack } from "@mui/material";
import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import PlantCard from "features/PlantCard/PlantCard";
import { Plant } from "shared/types/Plants";
import PlantCardSkeleton from "features/PlantCard/PlantCardSkeleton";

type SearchResultsProps = {
    searchInputVal: string;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal } = props;

    const { data, loading, error } = useFetchData<Plant[]>({
        path: `/species/search?q=${searchInputVal}`,
    });

    if (loading)
        return (
            <>
                {new Array(6).fill(0).map((_, index) => (
                    <PlantCardSkeleton key={index} size="small" />
                ))}
            </>
        );
    if (error) return <div>Error</div>;
    if (!data?.length) return <>No Data</>;

    return (
        <Stack spacing={1}>
            {data.map((item) => (
                <PlantCard key={item.id} plant={item} size="small" />
            ))}
        </Stack>
    );
};

export default SearchResults;
