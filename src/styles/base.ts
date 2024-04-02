import { css } from "hono/css";

const baseStyles = css`
  :-hono-global {
    html {
      line-height: 1.6;
      scrollbar-gutter: stable;
      -webkit-text-size-adjust: 100%;
    }

    body {
      background: #fff;
      color: #555;
      font-family: system-ui, Arial, sans-serif;
      font-size: 1.0625rem;
      line-height: inherit;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    a {
      color: var(--blue);
    }
  }
`;

export default baseStyles;
