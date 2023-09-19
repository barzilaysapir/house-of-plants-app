import { css } from "@emotion/react";
// import 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap';

const GlobalStyles = css`
    html {
        font-size: 16px;
    }

    :root {
        --bg-color: #f9f9f9;
    }

    body {
        margin: 0;
        background-color: var(--bg-color);
        padding-bottom: 70px;
    }
    
    .MuiBox-root {
    }
    
    .MuiAppBar-root {
        background-color: var(--bg-color) !important;
        box-shadow: none !important;
    }
`;

export default GlobalStyles;
