"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function extractLocale(pathname: string): "en" | "ru" | "hy" {
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  if (first === "ru" || first === "hy" || first === "en") return first;
  return "en";
}

export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = extractLocale(pathname);
  }, [pathname]);

  return null;
}
