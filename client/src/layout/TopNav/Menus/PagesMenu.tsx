import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import useTopNav, { PAGES } from "../useTopNav";

const PagesMenu = () => {
    const { anchorElPages, handleOpenPagesMenu, handleClosePagesMenu } =
        useTopNav();

    return (
        <>
            {/* Mobile */}
            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}> */}
            <Box
                sx={{
                    marginInlineEnd: "auto",
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenPagesMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElPages}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={Boolean(anchorElPages)}
                    onClose={handleClosePagesMenu}
                    // sx={{
                    //     display: { xs: "block", md: "none" },
                    // }}
                >
                    {PAGES.map((page) => (
                        <MenuItem key={page} onClick={handleClosePagesMenu}>
                            {page}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            {/* Desktop */}
            {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {PAGES.map((page) => (
                    <Button
                        key={page}
                        onClick={handleClosePagesMenu}
                        sx={{ my: 2, color: "GrayText", display: "block" }}
                    >
                        {page}
                    </Button>
                ))}
            </Box> */}
        </>
    );
};

export default PagesMenu;
