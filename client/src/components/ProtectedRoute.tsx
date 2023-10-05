import { FC } from "react";
import { Navigate } from "react-router-dom";
import useLocalStorage from "shared/hooks/useLocalStorage";
import { Route } from "shared/types/route";

type ProtectedRouteProps = {
    children: JSX.Element;
};

const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
    const { children } = props;

    const { user } = useLocalStorage();

    if (!user) {
        return <Navigate to={Route.SIGN_IN} replace />;
    }

    return children;
};

export default ProtectedRoute;
