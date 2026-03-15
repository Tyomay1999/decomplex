import { env } from "@/lib/env";

export function withBasePath(path: string): string {
  const bp = env.BASE_PATH ?? "";
  return bp ? `${bp}${path}` : path;
}

function stripTrailingSlash(input: string): string {
  if (input === "/") return "/";
  return input.endsWith("/") ? input.slice(0, -1) : input;
}

export function absoluteUrl(path: string): string {
  const normalizedPath = stripTrailingSlash(path);
  const url = new URL(withBasePath(normalizedPath), env.SITE_URL).toString();
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function metadataBaseUrl(): URL {
  const base = new URL(env.SITE_URL);
  const bp = env.BASE_PATH ?? "";
  return new URL(bp ? `${bp}/` : "/", base);
}

export function stripBasePath(pathname: string): string {
  const bp = env.BASE_PATH ?? "";
  if (!bp) return pathname;
  return pathname.startsWith(bp) ? pathname.slice(bp.length) || "/" : pathname;
}
