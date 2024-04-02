import type { FC } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";
import { Component } from "./component";

export const Header: FC = () => {
  const c = useRequestContext();

  const current = (path: string) => {
    return c.req.path === path ? "page" : undefined;
  };

  return <Component current={current} />;
};
