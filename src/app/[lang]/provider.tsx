"use client";
import { Translations } from "fumadocs-ui/contexts/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SearchDialog = dynamic(() => import("@/components/search"), {
  ssr: false,
});

export function Provider({ children, lang }: { children: ReactNode, lang: string }) {
    return (
        <RootProvider
            search={{
                SearchDialog,
                enabled: true,
            }}
            i18n={{
                locale: lang,
                locales: [
                    {
                        name: "English",
                        locale: "en",
                    },
                    {
                        name: "Portuguese",
                        locale: "pt",
                    }
                ],
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
    );
}