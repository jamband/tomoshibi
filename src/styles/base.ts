import { css } from "hono/css";

const baseStyles = css`
  :-hono-global {
    html {
      line-height: 1.6;
      scrollbar-gutter: stable;
      -webkit-text-size-adjust: 100%;
    }

    body {
      background: rgb(var(--white));
      color: rgb(var(--gray));
      font-family: system-ui, sans-serif;
      font-size: 1rem;
      line-height: inherit;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    a {
      color: rgb(var(--blue));
    }

    :focus {
      outline: revert;
    }
  }
`;

export default baseStyles;
