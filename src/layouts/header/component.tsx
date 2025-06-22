import type { FC } from "hono/jsx";
import styles from "./styles";
import type { _Props } from "./types";

export const Component: FC<_Props> = (props) => (
  // biome-ignore lint/a11y/useAriaPropsSupportedByRole: reason
  <header class={styles.container} aria-label="header navigation">
    <a href="/" class={styles.link} aria-current={props.current("/")}>
      home
    </a>
    <a
      href="/about/"
      class={styles.link}
      aria-current={props.current("/about/")}
    >
      about
    </a>
  </header>
);
