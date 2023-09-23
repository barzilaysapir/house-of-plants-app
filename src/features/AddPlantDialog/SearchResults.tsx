import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";

type SearchResultsProps = {};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { data: { data } = {}, isLoading, isError } = useFetchData("/plants");

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    console.log(data);

    return (
        <pre style={{ whiteSpace: "break-spaces" }}>
            {JSON.stringify(data[10])}
        </pre>
    );
};

export default SearchResults;
