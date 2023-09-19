import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { User } from "shared/types/Users";
import LOCALE from "locale/Locale";

type GreetingProps = User;

const Greeting = (props: GreetingProps) => {
    const { title } = props;

    const GREETING = LOCALE.formatString(LOCALE.userHeader.greeting, title)

    return (
        <Typography
            variant="h5"
            component="span"
            color={green[500]}
            fontFamily="Dancing Script, cursive"
        >
            {GREETING}
        </Typography>
    );
}

export default Greeting;
