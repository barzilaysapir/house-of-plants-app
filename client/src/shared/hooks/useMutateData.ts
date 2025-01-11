import { useMutation, useQueryClient } from "react-query";

type UseMutateDataProps = {
  url: string;
  onComplete?: () => void;
  refetchOnSuccessKey?: string;
};

const useMutateData = <TData, TError, TVariables>({
  url,
  onComplete = () => null,
  refetchOnSuccessKey,
}: UseMutateDataProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error, data } = useMutation<
    TData,
    TError,
    TVariables
  >({
    mutationFn: async (variables: TVariables) =>
      fetch(import.meta.env.VITE_APP_API + url, {
        method: "POST",
        body: JSON.stringify(variables),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    onSuccess: () => {
      refetchOnSuccessKey && queryClient.invalidateQueries(refetchOnSuccessKey);
      onComplete();
    },
  });

  if (isError) console.error(error);

  return {
    mutate,
    loading: isLoading,
    error,
    data,
  };
};

export default useMutateData;
