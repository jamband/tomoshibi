import { rename, rm } from "node:fs/promises";

await rename("dist/not-found/index.html", "dist/404.html");
await rm("dist/not-found", { recursive: true, force: true });
