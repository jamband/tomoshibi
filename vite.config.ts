import { resolve } from "node:path";
import devServer from "@hono/vite-dev-server";
import ssgBuild from "@hono/vite-ssg";
import { defineConfig } from "vite";

const entry = "src/index.ts";

export default defineConfig({
  plugins: [devServer({ entry }), ssgBuild({ entry })],
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});
