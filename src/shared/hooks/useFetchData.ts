import useSWR from "swr";

type Data = {
    // Your data type here, for example:
    id: number;
    name: string;
};

const fetcher = (url: string): Promise<Data> => {
    return fetch(url).then((res) => res.json());
}

const useFetchData = (epParams: string) => {
    const { data, error } = useSWR<Data>("https://trefle.io/api/v1" + epParams, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useFetchData;
