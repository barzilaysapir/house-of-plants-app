import { CircularProgress, Stack } from "@mui/material";
import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import PlantCard from "features/PlantCard/PlantCard";
import { Plant } from "shared/types/Plants";

type SearchResultsProps = {
    searchInputVal: string;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal } = props;

    const { data, loading, error } = useFetchData<Plant[]>(
        `/species/search?q=${searchInputVal}`
    );

    if (loading)
        return (
            <Stack flex={1}>
                <CircularProgress sx={{ margin: "auto" }} />
            </Stack>
        );
    if (error) return <div>Error</div>;
    if (!data) return <>No Data</>;
    console.log(data);

    return (
        <div>
            {data.map((item) => (
                <PlantCard key={item.id} plant={item} />
            ))}
        </div>
    );
};

export default SearchResults;
