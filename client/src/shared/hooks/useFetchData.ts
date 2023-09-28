import useSWR from "swr";

const fetcher = async <Data>(url: string): Promise<Data> => {
    const res = await fetch(url);
    return await res.json();
};

type UserFetchDataProps = {
    path: string;
    body?: any;
    shouldFetch?: any;
};

const useFetchData = <Data>({
    path,
    shouldFetch = true,
}: UserFetchDataProps) => {
    const { data, error } = useSWR<Data>(
        Boolean(shouldFetch) ? process.env.REACT_APP_API + path : null,
        fetcher<Data>
    );

    if (error) console.error(error);

    return {
        data,
        loading: shouldFetch && !error && !data,
        error,
    };
};

export default useFetchData;
