import { Box, Typography } from "@mui/material";
import { FC } from "react";

type PageTitleProps = {
    title: string;
    subtitle?: string | number;
};

const PageTitle: FC<PageTitleProps> = props => {
    const { title, subtitle } = props;
    return (
        <Box component="header" marginBottom={1.5} paddingY={1}>
            <Typography variant="h2" component="h1" >
                {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" marginTop={0.5}>
                {subtitle}
            </Typography>
        </Box >
    );
}

export default PageTitle;
