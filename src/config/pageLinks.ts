export type Locale = "en" | "ru" | "hy";

export type PageKey = "web" | "admin" | "mobile" | "backend" | "infrastructure";

type Links = {
  liveBase: string;
  repo: string;
  supportsLocalePath?: boolean;
  apkPath?: string;
};

export const PAGE_LINKS: Record<PageKey, Links> = {
  admin: {
    liveBase: "https://decomplex-admin.tyomay.dev",
    repo: "https://github.com/Tyomay1999/decomplex-admin-panel",
    supportsLocalePath: false,
  },
  web: {
    liveBase: "https://decomplex-web.tyomay.dev",
    repo: "https://github.com/Tyomay1999/decomplex-web-app",
    supportsLocalePath: false,
  },
  mobile: {
    liveBase: "https://decomplex-mobile.tyomay.dev",
    repo: "https://github.com/Tyomay1999/decomplex-mobile-app",
    supportsLocalePath: false,
    apkPath: "/public/downloads/decomplex.apk",
  },
  backend: {
    liveBase: "https://decomplex-api.tyomay.dev",
    repo: "https://github.com/Tyomay1999/decomplex-backend",
    supportsLocalePath: false,
  },
  infrastructure: {
    liveBase: "",
    repo: "https://github.com/Tyomay1999/decomplex-infrastructure",
    supportsLocalePath: false,
  },
};

export function buildLiveUrl(page: PageKey, locale: Locale): string {
  const item = PAGE_LINKS[page];
  if (!item.supportsLocalePath) return item.liveBase;
  return `${item.liveBase}/${locale}`;
}
