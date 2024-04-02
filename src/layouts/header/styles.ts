import { css } from "hono/css";

const container = css`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0 0;
`;

const link = css`
  &[aria-current="page"] {
    text-decoration: underline;
  }
`;

export default {
  container,
  link,
};
