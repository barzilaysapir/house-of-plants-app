import { FC } from "react";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

const LoaderWrapper: FC = () => {
    const { state } = useNavigation();

    if (state === "loading") return <Loader />;

    return <Outlet />;
};

export default LoaderWrapper;
