import type { FC } from "hono/jsx";
import { APP_NAME } from "@/constants/app";
import styles from "./styles";

export const Component: FC = () => (
  <footer class={styles.container}>
    {`© ${new Date().getFullYear()} ${APP_NAME}`}
  </footer>
);
