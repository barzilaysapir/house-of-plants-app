import useSWR from "swr";

const fetcher = async <Data>(url: string): Promise<Data> => {
    const res = await fetch(url);
    return await res.json();
}

const useFetchData = <Data>(path: string) => {
    const { data, error } = useSWR<Data>(
        "http://localhost:4000" + path,
        fetcher<Data>
    );
    
    if (error) console.error(error);

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useFetchData;
