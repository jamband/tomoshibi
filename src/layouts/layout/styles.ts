import { css } from "hono/css";

const body = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-height: 100vh;
`;

const main = css`
  flex: 1;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 768px;
  }
`;

export default {
  body,
  main,
};
