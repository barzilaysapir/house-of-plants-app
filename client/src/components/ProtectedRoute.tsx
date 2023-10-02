import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Route } from "shared/types/route";

type ProtectedRouteProps = {
    children: JSX.Element;
};

const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
    const { children } = props;

    // if (!localStorage.getItem("user")) {
    //     return <Navigate to={Route.SIGN_IN} replace />;
    // }

    return children;
};

export default ProtectedRoute;
