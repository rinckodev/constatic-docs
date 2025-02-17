import { I18nProvider, Translations } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "../global.css";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>, children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider locale={(await params).lang} locales={[
          { locale: "en", name: "English" },
          { locale: "pt", name: "Português" },
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
              editOnGithub: "Editar no github",
            },
          } as Record<string, Partial<Translations>>)[(await params).lang]}
        >
          <RootProvider>
            {children}
          </RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
