import { css } from "hono/css";

const container = css`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-block-size: 100svb;
`;

const main = css`
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;

  @media (width >= 48rem) {
    padding: 0;
    width: 48rem;
  }
`;

export default {
  container,
  main,
};
