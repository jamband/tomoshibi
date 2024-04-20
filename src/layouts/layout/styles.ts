import { css } from "hono/css";

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
  main,
};
