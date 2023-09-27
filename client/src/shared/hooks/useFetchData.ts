import useSWR from "swr";

const fetcher = async <Data>(url: string): Promise<Data> => {
    const res = await fetch(url);
    return await res.json();
};

const useFetchData = <Data>(path: string) => {
    const { data, error } = useSWR<Data>(
        process.env.REACT_APP_API + path,
        fetcher<Data>
    );

    if (error) console.error(error);

    return {
        data,
        loading: !error && !data,
        error,
    };
};

export default useFetchData;
