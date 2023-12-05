import { FC } from "react";
import useFetchData from "shared/hooks/useFetchData";
import PlantCard from "features/PlantCard/PlantCard";
import { Plant } from "shared/types/plants";
import { CardImageSize } from "shared/types/card";
import SearchResultsSkeleton from "./SearchResultsSkeleton";
import StyledStep from "../../Step.style";

type SearchResultsProps = {
    searchInputVal: string;
    selectPlant: (plant: Plant) => void;
};

const SearchResults: FC<SearchResultsProps> = (props) => {
    const { searchInputVal, selectPlant } = props;

    const { data, loading, error } = useFetchData({
        keys: ["plantsSearch"],
        url: `/species/search?q=${searchInputVal}`,
        trigger: searchInputVal,
    });

    if (loading) return <SearchResultsSkeleton />;
    if (error) return <div>Error</div>;
    if (!data?.length) return <>No Data</>;

    return (
        <StyledStep>
            {data.map((specie: Plant) => (
                <PlantCard
                    key={specie.id}
                    plant={specie}
                    size={CardImageSize.SMALL}
                    onClick={() => selectPlant(specie)}
                />
            ))}
        </StyledStep>
    );
};

export default SearchResults;
