import useSWRMutation from "swr/mutation";

const fetcher = async (url: string, { args }: { args: string }) => {
    const res = await fetch(url + args ? `/${args}` : "", {
        method: "POST",
    });
    return res.json();
};

type UseMutateDataProps = {
    url: string;
    options?: any;
};

const useMutateData = <Data>({ url, options }: UseMutateDataProps) => {
    // const { trigger, data, error, isMutating } = useSWRMutation<Data>(
    //     process.env.REACT_APP_API + url,
    //     fetcher,
    //     options
    // );
    // if (error) console.error(error);
    // return {
    //     trigger,
    //     data,
    //     loading: isMutating,
    //     error,
    // };
};

export default useMutateData;
