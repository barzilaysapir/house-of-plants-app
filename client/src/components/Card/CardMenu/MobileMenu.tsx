import { FC, PropsWithChildren } from "react";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import theme from "config/theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StyledDrawerHeader } from "./CardMenu.style";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

type MobileMenuProps = PropsWithChildren & {
    title: string;
    isOpen: boolean;
    handleClose: () => void;
};

const MobileMenu: FC<MobileMenuProps> = (props) => {
    const { children, title, isOpen, handleClose } = props;

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
                    <YardOutlinedIcon />
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
