import { useQuery } from "react-query";

const fetcher = (url: string) =>
    fetch(process.env.REACT_APP_API + url).then((res) => res.json());

const useFetchData = (key: string, url: string) => {
    const { isLoading, isError, error, data } = useQuery(
        key,
        async () => fetcher(url),
        {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            refetchInterval: false,
            refetchIntervalInBackground: false,
        }
    );

    if (isError) console.error(error);

    return {
        loading: isLoading,
        error,
        data,
    };
};

export default useFetchData;
