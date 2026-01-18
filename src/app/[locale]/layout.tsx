import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { getMessages, setRequestLocale } from "next-intl/server";

import { isLocale } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { IntlProvider } from "@/components/IntlProvider";
import { ThemeToggle } from "../../components/ThemeToggle";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme>
      <IntlProvider locale={locale} messages={messages}>
        <div className="mx-auto max-w-5xl space-y-6 p-6">
          <Navbar locale={locale} />
          <ThemeToggle />
          <LanguageSwitcher />
          {children}
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}
