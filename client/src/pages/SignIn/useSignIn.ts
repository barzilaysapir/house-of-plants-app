import { useMutation } from "react-query";
import { CredentialResponse } from "./SignIn.types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "shared/hooks/useLocalStorage";
import { Route } from "shared/types/route";

const useSignIn = () => {
  const navigate = useNavigate();
  const { setToLocalStorage } = useLocalStorage();

  const { mutate } = useMutation({
    mutationFn: async (credential: string) =>
      fetch(`${import.meta.env.VITE_APP_API}/users/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${credential}`,
        },
      }).then((res) => res.json()),
    onSuccess: (response) => {
      setToLocalStorage("user", response);
      navigate(Route.MY_PLANTS);
    },
  });

  const onSuccess = async ({ credential }: CredentialResponse) => {
    if (credential) mutate(credential);
    else console.error("No credential returned");
  };

  const onFailure = () => {
    console.log("LOGIN FAILED");
  };

  return {
    onSuccess,
    onFailure,
  };
};

export default useSignIn;
