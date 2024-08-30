import { css } from "hono/css";
import baseStyles from "./base";
import rootStyles from "./root";

const appStyles = css`
  ${rootStyles}
  ${baseStyles}
`;

export default appStyles;
