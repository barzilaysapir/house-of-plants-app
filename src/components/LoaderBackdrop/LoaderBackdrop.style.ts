import { Backdrop, styled } from "@mui/material"

const StyledLoaderBackdrop = styled(Backdrop)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
}));

export default StyledLoaderBackdrop;
