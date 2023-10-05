import { useQuery } from "react-query";

const fetcher = (url: string) =>
    fetch(process.env.REACT_APP_API + url).then((res) => res.json());

type UseFetchDataProps = {
    key: string;
    url: string;
    trigger?: any;
};

const useFetchData = ({ key, url, trigger = true }: UseFetchDataProps) => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: [key, trigger],
        queryFn: async () => fetcher(url),
        enabled: Boolean(trigger),
    });

    if (isError) console.error(error);

    return {
        loading: isLoading,
        error,
        data,
    };
};

export default useFetchData;
