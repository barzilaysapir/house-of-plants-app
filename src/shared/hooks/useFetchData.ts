import useSWR from "swr";

type Data = any;

const fetcher = (url: string): Promise<Data> => {
    return fetch(url).then((res) => res.json());
}

const useFetchData = (path: string) => {
    const { data, error } = useSWR<Data>(
        "http://localhost:4000" + path,
        fetcher
    );
    // const { data, error } = useSWR<Data>("https://trefle.io/api/v1" + epParams, fetcher);
    
    if (error) {
        console.error(error);
    }

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useFetchData;
