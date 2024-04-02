import { css } from "hono/css";
import baseStyles from "./base";
import resetStyles from "./reset";
import rootStyles from "./root";

const appStyles = css`
  ${resetStyles}
  ${rootStyles}
  ${baseStyles}
`;

export default appStyles;
