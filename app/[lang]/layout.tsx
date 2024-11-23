// import { HomeLayout } from "fumadocs-ui/layouts/home";
import { CommomPageProps } from "@/lib/types";
import { I18nProvider, Translations } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout({ params, children }: CommomPageProps & { children: ReactNode }) {
  const { lang } = await params;
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider
          locale={lang}
          locales={[
            { locale: 'en', name: 'English' },
            { locale: "pt", name: "Portuguese" }
          ]}
          translations={({
            pt: {
              lastUpdate: "Última atualização",
              searchNoResult: "Sem resultado",
              tocNoHeadings: "Sem cabeçalhos",
              chooseLanguage: "Escolha o idioma",
              name: "Português",
              toc: "Nesta página",
              search: "Procurar",
              previousPage: "Anterior",
              nextPage: "Próxima",
            },
          } as Record<string, Partial<Translations>>)[lang]}
        >
          <RootProvider>
            {children}
          </RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
