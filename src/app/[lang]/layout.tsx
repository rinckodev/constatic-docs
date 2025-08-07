import "../global.css";
import { Translations } from "fumadocs-ui/contexts/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const codefont = JetBrains_Mono({
  subsets: ["latin"]
});

codefont;

const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Portuguese",
    locale: "pt",
  },
];

export default async function Layout({ children, params }: {
  params: Promise<{
    lang: string,
    slug?: string[]
  }>
  children: React.ReactNode
}) {
  const lang = (await params).lang
  return (
    <html lang="en" data-theme="dark" className={`${inter.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: ({
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
              }
            } as Record<string, Partial<Translations>>)[lang]
          }}
          theme={{
            defaultTheme: "dark",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}