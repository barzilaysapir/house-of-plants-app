import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { StyledCardContent } from "./Card.style";

type CardContentProps = PropsWithChildren & {
    data: { name: string; description?: string; image: string };
    noWrap?: boolean;
};

const CardContent: FC<CardContentProps> = (props) => {
    const {
        data: { name, description = "" },
        children,
        noWrap,
    } = props;

    return (
        <StyledCardContent>
            <Stack direction="column" rowGap={1} height="100%">
                <Box>
                    <Typography
                        variant="body1"
                        component="h2"
                        fontWeight={600}
                        noWrap={noWrap}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        noWrap={noWrap}
                    >
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
