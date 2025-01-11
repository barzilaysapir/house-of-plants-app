import { css } from "@emotion/react";
import MuiBaseline from "./MuiBaseline";

export const GLOBAL_IMPORTS = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");
`;

const GLOBAL_STYLES = css`
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

  *::-webkit-scrollbar {
    width: 0.4em;
  }

  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${MuiBaseline}
`;

export default GLOBAL_STYLES;
