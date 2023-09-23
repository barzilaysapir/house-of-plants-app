import { CircularProgress, List, ListItem, Stack } from "@mui/material";
import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import { Specie, TrefleSpecies } from "../../../../shared/species";

type SearchResultsProps = {
    searchInputVal: string;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal } = props;

    const {
        data: { data } = {},
        isLoading,
        isError,
    } = useFetchData<TrefleSpecies>(`/species/search/${searchInputVal}`);

    if (isLoading)
        return (
            <Stack flex={1}>
                <CircularProgress sx={{ margin: "auto" }} />
            </Stack>
        );
    if (isError) return <div>Error</div>;
    if (!data) return <>No Data</>;

    return (
        <List>
            {data.map((item: Specie) => (
                <ListItem key={item.id}>
                    <List>
                        {/* {Object.entries(item).map(([key, value]) => {
                            if (value && typeof value === "object") {
                                console.log(value);

                                return Object.entries(value).map(
                                    ([key, val]: any) => (
                                        <ListItem key={item.id + "_" + key}>
                                            <ListItemText>
                                                {key}: <b>{val}</b>
                                            </ListItemText>
                                        </ListItem>
                                    )
                                );
                            }
                        })} */}
                        <ListItem>
                            <img src={item.image_url} alt="" width={300} />
                        </ListItem>
                    </List>
                </ListItem>
            ))}
        </List>
    );
};

export default SearchResults;
