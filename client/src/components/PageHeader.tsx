import { Box, Button, ButtonProps, Stack, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

type PageHeaderProps = {
    title: string | ReactElement;
    subtitle?: string;
    callToAction?: ButtonProps & {
        inputLabel: string;
    };
};

const PageHeader: FC<PageHeaderProps> = (props) => {
    const {
        title,
        subtitle,
        callToAction,
        callToAction: { inputLabel, ...buttonProps } = {},
        ...rest
    } = props;

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            component="header"
            paddingY={1}
            {...rest}
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
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    {...buttonProps}
                >
                    {inputLabel}
                </Button>
            )}
        </Stack>
    );
};

export default PageHeader;
