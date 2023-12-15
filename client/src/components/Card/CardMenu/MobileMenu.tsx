import { FC, PropsWithChildren } from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    SvgIconTypeMap,
    Typography,
} from "@mui/material";
import theme from "config/theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StyledDrawerHeader } from "./CardMenu.style";
import { OverridableComponent } from "@mui/types";

type MobileMenuProps = PropsWithChildren & {
    header: {
        Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
        title: string;
    };
    isOpen: boolean;
    handleClose: () => void;
};

const MobileMenu: FC<MobileMenuProps> = (props) => {
    const {
        children,
        header: { Icon, title },
        isOpen,
        handleClose,
    } = props;

    return (
        <Drawer
            variant="temporary"
            open={isOpen}
            onClose={handleClose}
            anchor={theme.direction === "rtl" ? "left" : "right"}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                    width: 240,
                },
            }}
        >
            <StyledDrawerHeader>
                <Box display="flex" gap="10px">
                    <Icon />
                    <Typography>{title}</Typography>
                </Box>

                <IconButton onClick={handleClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </StyledDrawerHeader>

            <Divider />

            {children}
        </Drawer>
    );
};

export default MobileMenu;
