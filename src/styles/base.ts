import { css } from "hono/css";

const baseStyles = css`
  :-hono-global {
    html {
      line-height: 1.6;
      scrollbar-gutter: stable;
      -webkit-text-size-adjust: 100%;
    }

    body {
      background: rgb(var(--gray-900));
      color: rgb(var(--gray-400));
      font-family: system-ui, sans-serif;
      font-size: 1.125rem;
      line-height: inherit;
    }

    h1 {
      color: rgb(var(--gray-100));
      font-weight: 700;
      line-height: 1.2;
    }

    a {
      color: rgb(var(--blue-400));
    }

    :focus {
      outline: revert;
    }
  }
`;

export default baseStyles;
