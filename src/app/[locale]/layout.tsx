import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { IntlProvider } from "@/components/layout/IntlProvider";
import { loadMessages } from "@/i18n/request";
import { defaultLocale, isLocale, locales } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export const dynamicParams = false;

type Params = { locale: string };

type Props = {
  children: ReactNode;
  params: Promise<Params>;
};

function pickLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);

  const messages = await loadMessages(locale);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} enableColorScheme>
      <IntlProvider locale={locale} messages={messages}>
        <Navbar />
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-10 xl:px-12">
          {children}
        </div>
        <Footer />
      </IntlProvider>
    </ThemeProvider>
  );
}
