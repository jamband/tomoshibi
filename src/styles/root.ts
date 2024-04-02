import { css } from "hono/css";

const rootStyles = css`
  :-hono-global {
    :root {
      --blue: blue;
    }
  }
`;

export default rootStyles;
