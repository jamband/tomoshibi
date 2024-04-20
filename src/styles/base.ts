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
      display: grid;
      font-family: system-ui, sans-serif;
      font-size: 1rem;
      grid-template-columns: 100%;
      grid-template-rows: auto 1fr auto;
      line-height: inherit;
      min-height: 100vh;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    a {
      color: rgb(var(--blue));
    }
  }
`;

export default baseStyles;
