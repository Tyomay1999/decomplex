import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

function withBasePath(path: string): string {
  const bp = env.BASE_PATH ?? "";
  return bp ? `${bp}${path}` : path;
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL(withBasePath("/sitemap.xml"), env.SITE_URL).toString(),
  };
}
