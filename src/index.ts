import type { Context } from "hono";
import { Hono } from "hono";
import { Layout } from "./layouts/layout";
import Home from "./routes";
import About from "./routes/about";
import NotFound from "./routes/not-found";

const app = new Hono();

const notFoundHandler = (c: Context) =>
  c.render(NotFound(), { title: "not found" });

app.use(Layout);
app.notFound(notFoundHandler);

app.get("/", (c) => c.render(Home(), { title: "" }));
app.get("/about/", (c) => c.render(About(), { title: "about" }));
app.get("/not-found/", notFoundHandler);

export default app;
