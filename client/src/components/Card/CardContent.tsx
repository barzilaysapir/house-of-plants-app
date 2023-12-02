import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { StyledCardContent } from "./Card.style";

type CardContentProps = {
    data: { name: string; description: string; image: string };
    children?: ReactNode;
};

const CardContent: FC<CardContentProps> = (props) => {
    const {
        data: { name, description },
        children,
    } = props;

    return (
        <StyledCardContent>
            <Stack direction="column" rowGap={1} height="100%">
                <Box>
                    <Typography
                        variant="body1"
                        component="h2"
                        fontWeight={600}
                        noWrap
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" noWrap>
                        {description}
                    </Typography>
                </Box>

                {children && (
                    <>
                        <Divider sx={{ width: "100%", marginBlock: 1 }} />
                        {children}
                    </>
                )}
            </Stack>
        </StyledCardContent>
    );
};

export default CardContent;
