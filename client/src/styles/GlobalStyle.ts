import { css } from "@emotion/react";

const GlobalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

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
