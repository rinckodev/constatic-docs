import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { I18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { pageTree } from "@/app/source"
import { LayoutTitle } from '../ui';

interface LayoutProps {
  params: { lang: string };
  children: ReactNode;
}
export default function Layout({ children, params }: LayoutProps) {
  if (params.lang === "favicon.ico"){
    return;
  }
  return <I18nProvider
    locale={params.lang}
    translations={{
      en: {
        name: "English",
      },
      pt: {
        lastUpdate: "Última atualização",
        searchNoResult: "Sem resultado",
        tocNoHeadings: "Sem cabeçalhos",
        chooseLanguage: "Escolha o idioma",
        name: "Portuguese",
        toc: "Nesta página",
        search: "Procurar",
        previousPage: "Anterior",
        nextPage: "Próxima",
      },
    }}
  > 
  <RootProvider>
    <DocsLayout
      i18n
      githubUrl="https://github.com/rinckodev/constatic"
      tree={pageTree[params.lang]}
      nav={{
        transparentMode: "always",
        title: <LayoutTitle/>,
        url: `/${params.lang}`,
        enabled: true,
      }}
    >
      {children}
    </DocsLayout>
  </RootProvider>
  </I18nProvider>
}
