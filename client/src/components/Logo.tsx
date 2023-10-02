import { Link } from "@mui/material";
import logo from "assets/icons/logo_leaf_circle.png";

const Logo = () => {
    return (
        <Link href="/myPlants">
            <img src={logo} alt="HOP homepage" height={40} />
        </Link>
    );
};

export default Logo;
