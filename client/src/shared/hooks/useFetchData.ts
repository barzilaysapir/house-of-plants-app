import { useQuery } from "react-query";

const fetcher = (url: string) =>
    fetch(process.env.REACT_APP_API + url)
        .then((res) => res.json())
        .catch((error) => console.error(error));

type UseFetchDataProps = {
    keys: string[];
    url: string;
    trigger?: any;
    onSuccess?: any;
};

const useFetchData = ({
    keys,
    url,
    trigger = true,
    onSuccess = () => null,
}: UseFetchDataProps) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [...keys, trigger],
        queryFn: async () => fetcher(url),
        enabled: Boolean(trigger),
        onSuccess,
    });

    return {
        loading: isLoading,
        error,
        data,
    };
};

export default useFetchData;
