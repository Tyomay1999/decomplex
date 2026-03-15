import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, isLocale, locales } from "./i18n/routing";

const intl = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

const allowedSections: ReadonlySet<string> = new Set([
  "admin",
  "backend",
  "infrastructure",
  "mobile",
  "web",
]);

function getPreferredLocale(request: NextRequest): string {
  const fromCookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (fromCookie && isLocale(fromCookie)) return fromCookie;

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  for (const l of locales) {
    if (acceptLanguage.includes(l)) return l;
  }

  return defaultLocale;
}

function withLocaleCookie(res: NextResponse, locale: string): NextResponse {
  res.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  return res;
}

function isBypassPath(pathname: string): boolean {
  return pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".");
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (isBypassPath(pathname)) {
    return NextResponse.next();
  }

  const preferred = getPreferredLocale(request);

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}`;
    return withLocaleCookie(NextResponse.redirect(url), preferred);
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";
  const second = segments[1] ?? "";

  if (!isLocale(first)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}`;
    return withLocaleCookie(NextResponse.redirect(url), preferred);
  }

  if (second && !allowedSections.has(second)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${first}`;
    return withLocaleCookie(NextResponse.redirect(url), first);
  }

  if (segments.length > 2) {
    const url = request.nextUrl.clone();
    url.pathname = second ? `/${first}/${second}` : `/${first}`;
    return withLocaleCookie(NextResponse.redirect(url), first);
  }

  return withLocaleCookie(intl(request), first);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
