import { CircularProgress, Stack } from "@mui/material";
import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import { Datum, TrefleSpecies } from "shared/types/Trefle";

type SearchResultsProps = {
    searchInputVal: string;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal } = props;

    const {
        data: { data } = {},
        isLoading,
        isError,
    } = useFetchData<TrefleSpecies>(`/plants`);

    if (isLoading)
        return (
            <Stack flex={1}>
                <CircularProgress sx={{ margin: "auto" }} />
            </Stack>
        );
    if (isError) return <div>Error</div>;
    if (!data) return <>No Data</>;

    return (
        <pre style={{ whiteSpace: "break-spaces" }}>
            {data.slice(0, 10).map((item: Datum) => (
                <ul
                    key={item.id}
                    style={{ padding: "20px", border: "1px solid" }}
                >
                    {Object.entries(item).map(([key, value]) => {
                        if (typeof value !== "object")
                            return (
                                <li key={item.id + "_" + key}>
                                    {key}: {value}
                                </li>
                            );
                    })}
                    <img src={item.image_url} alt="" width={300} />
                    {/* {JSON.stringify(item)} */}
                </ul>
            ))}
        </pre>
    );
};

export default SearchResults;
