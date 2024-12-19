import { Hono } from "hono";
import { appendTrailingSlash } from "hono/trailing-slash";
import { Layout } from "./layouts/layout";
import Home from "./routes";
import About from "./routes/about";
import NotFound from "./routes/not-found";

const app = new Hono({ strict: true })
  .use(Layout)
  .use(appendTrailingSlash())

  .get("/", (c) => c.render(Home(), { title: "" }))
  .get("/about/", (c) => c.render(About(), { title: "about" }))
  .get("/not-found/", (c) => c.render(NotFound(), { title: "not found" }));

export default app;
