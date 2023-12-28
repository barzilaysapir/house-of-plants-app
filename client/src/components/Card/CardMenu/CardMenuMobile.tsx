import { FC, PropsWithChildren } from "react";
import { Box, Divider, SvgIconTypeMap, Typography } from "@mui/material";
import theme from "config/theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    StyledCardMenuHeader,
    StyledCardMenuMobile,
    StyledCardMenuCloseBtn,
} from "./CardMenu.style";
import { OverridableComponent } from "@mui/types";
import i18n from "config/locales";

type CardMenuMobileProps = PropsWithChildren & {
    header: {
        Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
        title: string;
    };
    isOpen: boolean;
    handleClose: () => void;
};

const CardMenuMobile: FC<CardMenuMobileProps> = (props) => {
    const {
        children,
        header: { Icon, title },
        isOpen,
        handleClose,
    } = props;

    return (
        <StyledCardMenuMobile
            variant="temporary"
            open={isOpen}
            onClose={handleClose}
            anchor={theme.direction === "rtl" ? "left" : "right"}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            <StyledCardMenuCloseBtn
                aria-label={i18n.t("close")}
                onClick={handleClose}
            >
                {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                ) : (
                    <ChevronRightIcon />
                )}
            </StyledCardMenuCloseBtn>

            <Divider orientation="vertical" />

            <Box>
                <StyledCardMenuHeader>
                    <Box display="flex" gap="10px">
                        <Icon />
                        <Typography>{title}</Typography>
                    </Box>
                </StyledCardMenuHeader>

                <Divider />

                {children}
            </Box>
        </StyledCardMenuMobile>
    );
};

export default CardMenuMobile;
