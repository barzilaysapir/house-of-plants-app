import { useEffect, useState } from "react";

type UseAllImagesLoadedProps = {
    imageCount: number;
};

const useAllImagesLoaded = ({ imageCount }: UseAllImagesLoadedProps) => {
    const [loadedCount, setLoadedCount] = useState<number>(0);
    const allLoaded: boolean = loadedCount >= imageCount;

    useEffect(() => {
        setLoadedCount(0);
    }, [imageCount]);

    const imageLoadHandler = () => {
        setLoadedCount((prev) => prev + 1);
    };

    return { allLoaded, imageLoadHandler };
};

export default useAllImagesLoaded;
