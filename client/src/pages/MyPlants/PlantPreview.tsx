import { Box } from "@mui/material";
import Loader from "components/Loader/Loader";
import PlantPreviewContent from "features/PlantPreview/PlantPreviewContent";
import PlantPreviewHeader from "features/PlantPreview/PlantPreviewHeader";
import { FC, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Plant } from "shared/types/plants";

export const plantPreviewLoader: LoaderFunction<Plant> = async ({ params }) => {
    const res = await fetch(
        `${import.meta.env.VITE_APP_API}/plants/${params.plantId}`
    );
    return await res.json();
};

const PlantPreview: FC = () => {
    const {
        id,
        image,
        primaryName,
        secondaryName,
        site,
        scientificName,
        thumbnail,
    } = useLoaderData() as Plant;

    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {!imageLoaded && <Loader />}

            <Box display={imageLoaded ? "block" : "none"}>
                <PlantPreviewHeader
                    primaryName={primaryName}
                    secondaryName={secondaryName}
                    image={image}
                    handleImageLoaded={handleImageLoaded}
                />

                <PlantPreviewContent
                    primaryName={primaryName}
                    secondaryName={secondaryName}
                    site={site}
                />
            </Box>
        </>
    );
};

export default PlantPreview;
