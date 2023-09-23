import { Box, Button, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import StyledPageHeader from "./PageHeader.style";

type PageHeaderProps = {
    title: string;
    subtitle?: string | number;
    callToAction?: {
        endIcon: ReactElement;
        onClick: any;
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
        <StyledPageHeader component="header" marginBottom={1.5} paddingY={1}>
            <Box>
                <Typography variant="h2" component="h1">
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    marginTop={0.5}
                >
                    {subtitle}
                </Typography>
            </Box>

            {callToAction && (
                <Button aria-label="add" color="primary" {...buttonProps}>
                    {label}
                </Button>
            )}
        </StyledPageHeader>
    );
};

export default PageHeader;
