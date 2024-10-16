import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import { I18nProvider, Translations } from "fumadocs-ui/i18n";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

interface Props {
  params: {
    lang: string;
  }
  children: ReactNode
}
export default function Layout({ children, params }: Props) {
  return (
    <html lang={params.lang} className={inter.className} suppressHydrationWarning>
      <body>
        <I18nProvider 
          locale={params.lang}
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
          } as Record<string, Partial<Translations>>)[params.lang]}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
