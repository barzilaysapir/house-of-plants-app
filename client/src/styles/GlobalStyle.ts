import { css } from "@emotion/react";

const GlobalStyles = css`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");

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

    .MuiAppBar-root {
        background-color: var(--bg-color) !important;
        box-shadow: none !important;
    }

    .MuiDialog-root {
        .MuiDialog-container {
            align-items: flex-end;
            .MuiDialog-paper {
                height: auto;
                padding-bottom: 20px;
                .MuiAppBar-root {
                    position: relative;
                }
            }
        }
    }

    .MuiToolbar-root {
        justify-content: space-between;
    }

    .MuiButton-root {
        &.MuiButton-contained {
            color: #fff;
        }
    }
`;

export default GlobalStyles;
