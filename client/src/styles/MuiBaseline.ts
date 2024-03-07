import { css } from "@emotion/react";

const MuiBaseline = css`
    .MuiAppBar-root {
        background-color: var(--bg-color) !important;
        box-shadow: none !important;
        /* background-color: #fff !important;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1) !important; */
    }

    .MuiDialog-root {
        .MuiDialog-container {
            align-items: flex-end;
            .MuiDialog-paper {
                height: auto;
                padding-bottom: 20px;
                .MuiAppBar-root {
                    position: relative;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }

    .MuiButton-root {
        &.MuiButton-contained {
            color: #fff;
        }
    }
    
    .MuiInputBase-root {
        background-color: #ffffff80;
    }
`;

export default MuiBaseline;
