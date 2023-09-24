import { CircularProgress, Container, Stack } from "@mui/material";
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
    console.log(data);

    if (loading)
        return (
            //  {data.map((item) => (
            // <PlantCard plant={{} as Plant} size="small" loading={loading} />
            // ))}
            <Stack flex={1}>
                <CircularProgress sx={{ margin: "auto" }} />
            </Stack>
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
