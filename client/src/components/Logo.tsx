import { Link } from "@mui/material";
import logo from "assets/icons/logo_leaf_circle.png";
import { Route } from "shared/types/route";

const Logo = () => {
    return (
        <Link href={Route.HOME}>
            <img src={logo} alt="HOP homepage" height={40} />
        </Link>
    );
};

export default Logo;
