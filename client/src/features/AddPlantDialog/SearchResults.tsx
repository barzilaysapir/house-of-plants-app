import {
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Stack,
} from "@mui/material";
import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import { SpecieLight } from "../../../../shared/types/API/species";

type SearchResultsProps = {
    searchInputVal: string;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal } = props;

    const { data, loading, error } = useFetchData<SpecieLight[]>(
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

    return (
        <List>
            {data.map((item: SpecieLight) => (
                <ListItem key={item.id} sx={{ flexDirection: "column" }}>
                    <ListItemText>{item.scientific_name}</ListItemText>
                    <img src={item.image_url || ""} alt="" height={300} />
                </ListItem>
            ))}
        </List>
    );
};

export default SearchResults;
