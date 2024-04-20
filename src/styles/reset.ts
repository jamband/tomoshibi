import { css } from "hono/css";

const resetStyles = css`
  :-hono-global {
    :focus {
      outline: revert;
    }
  }
`;

export default resetStyles;
