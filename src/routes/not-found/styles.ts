import { css } from "hono/css";

const container = css`
  align-items: center;
  display: flex;
  font-size: 4rem;
  height: 70vh;
  justify-content: center;
  text-align: center;

  @media (width >= 48rem) {
    font-size: 5rem;
    height: 82vh;
  }
`;

export default {
  container,
};
