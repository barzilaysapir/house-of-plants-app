import { useQuery } from "@tanstack/react-query";

const fetcher = (url: string) =>
    fetch(import.meta.env.VITE_APP_API + url)
        .then((res) => res.json())
        .catch((error) => console.error(error));

type UseFetchDataProps = {
    keys: string[];
    url: string;
    trigger?: any;
};

const useFetchData = ({ keys, url, trigger = true }: UseFetchDataProps) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [...keys, trigger],
        queryFn: async () => fetcher(url),
        enabled: Boolean(trigger),
    });

    return {
        loading: isLoading,
        error,
        data,
    };
};

export default useFetchData;
