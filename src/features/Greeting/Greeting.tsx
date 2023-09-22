import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { User } from "shared/types/Users";
import i18n from "i18next";

type GreetingProps = User;

const Greeting = (props: GreetingProps) => {
    const { title } = props;

    return (
        <Typography
            variant="h5"
            component="span"
            color={green[500]}
            fontFamily="Dancing Script, cursive"
        >
            {i18n.t("userHeader.greeting", { title })}
        </Typography>
    );
};

export default Greeting;
