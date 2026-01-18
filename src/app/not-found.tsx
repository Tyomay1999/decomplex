"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/routing";

export default function NotFound() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}/`);
  }, []);

  return null;
}
