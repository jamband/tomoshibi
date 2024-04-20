import { css } from "hono/css";

const rootStyles = css`
  :-hono-global {
    :root {
      --white: 255 255 255;
      --gray: 85 85 85;
      --blue: 0 0 255;
    }
  }
`;

export default rootStyles;
