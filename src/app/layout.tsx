import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { withBasePath, metadataBaseUrl } from "@/lib/url";
import HtmlLangSync from "@/components/common/HtmlLangSync";
import { defaultLocale, isLocale } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  manifest: withBasePath("/manifest.webmanifest"),
  icons: {
    icon: [
      {
        url: withBasePath("/logo/web-app-manifest-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: withBasePath("/logo/web-app-manifest-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: withBasePath("/logo/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

type Props = {
  children: ReactNode;
};

function resolveInitialLang(nextLocaleCookie: string | undefined): string {
  return nextLocaleCookie && isLocale(nextLocaleCookie) ? nextLocaleCookie : defaultLocale;
}

export default async function RootLayout({ children }: Props) {
  const c = await cookies();
  const lang = resolveInitialLang(c.get("NEXT_LOCALE")?.value);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HtmlLangSync />
        {children}
      </body>
    </html>
  );
}
