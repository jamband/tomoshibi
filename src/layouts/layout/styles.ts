import { css } from "hono/css";

const container = css`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const main = css`
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
    width: 768px;
  }
`;

export default {
  container,
  main,
};
