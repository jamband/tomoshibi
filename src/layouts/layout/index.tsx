import { APP_DESCRIPTION, APP_NAME } from "@/constants/app";
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
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/reset-1-11-3.css" />
        <Style>{appStyles}</Style>
        <title>{title}</title>
      </head>
      <body>
        <Header />
        <main class={styles.main}>{props.children}</main>
        <Footer />
      </body>
    </html>
  );
});
