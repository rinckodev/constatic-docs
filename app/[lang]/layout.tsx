import { I18nProvider, Translations } from "fumadocs-ui/i18n";
import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

interface Props {
  params: Promise<{
    lang: string;
  }>
  children: ReactNode
}
export default async function Layout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <I18nProvider 
          locale={lang}
          locales={[
            { name: "English", locale: "en" },
            { name: "Portuguese", locale: "pt" }
          ]}
          translations={({
            en: {
              name: "English",
            },
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
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
