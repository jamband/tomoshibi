import { css } from "hono/css";

const rootStyles = css`
  :-hono-global {
    :root {
      --gray-100: 236 239 244;
      --gray-400: 183 180 199;
      --gray-900: 19 17 26;
      --blue-400: 148 193 242;
    }
  }
`;

export default rootStyles;
