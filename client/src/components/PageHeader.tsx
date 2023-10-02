import { Box, Button, ButtonProps, Stack, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

type PageHeaderProps = {
    title: string | ReactElement;
    subtitle?: string;
    callToAction?: ButtonProps & {
        label: string;
    };
};

const PageHeader: FC<PageHeaderProps> = (props) => {
    const {
        title,
        subtitle,
        callToAction,
        callToAction: { label, ...buttonProps } = {},
    } = props;

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            component="header"
            marginBottom={1}
            paddingY={1}
        >
            <Box>
                <Typography variant="h2" component="h1">
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        marginTop={0.5}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Box>

            {callToAction && (
                <Button variant="text" color="primary" {...buttonProps}>
                    {label}
                </Button>
            )}
        </Stack>
    );
};

export default PageHeader;
