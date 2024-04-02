import { APP_NAME } from "@/constants/app";
import appStyles from "@/styles/app";
import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from "./styles";

export const Layout = jsxRenderer((props) => {
  const title = props.title === "" ? APP_NAME : `${props.title} ･ ${APP_NAME}`;

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <Style>{appStyles}</Style>
        <title>{title}</title>
      </head>
      <body class={styles.body}>
        <Header />
        <main class={styles.main}>{props.children}</main>
        <Footer />
      </body>
    </html>
  );
});
