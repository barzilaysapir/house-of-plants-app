import { css } from "@emotion/react";
import MuiBaseline from "./MuiBaseline";

const GLOBAL_STYLES = css`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");

    :root {
        --bg-color: #f9f9f9;
    }

    html {
        height: 100%;
        font-size: 16px;
        max-height: 100vh;
    }

    body {
        height: inherit;
        margin: 0;
        background-color: var(--bg-color);
    }

    #root {
        height: inherit;
    }

    ${MuiBaseline}
`;

export default GLOBAL_STYLES;
