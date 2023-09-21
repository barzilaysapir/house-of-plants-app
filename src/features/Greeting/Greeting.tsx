import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { User } from "shared/types/Users";
import { useTranslation } from "react-i18next";

type GreetingProps = User;

const Greeting = (props: GreetingProps) => {
    const { title } = props;

    const { t } = useTranslation();

    return (
        <Typography
            variant="h5"
            component="span"
            color={green[500]}
            fontFamily="Dancing Script, cursive"
        >
            {t("userHeader.greeting", { title })}
        </Typography>
    );
};

export default Greeting;
