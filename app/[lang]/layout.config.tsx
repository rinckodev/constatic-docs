import { LayoutTitle } from "@/components";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  i18n: true,
  nav: {
    transparentMode: "always",
    title: <LayoutTitle/>,
    enabled: true,
  },
  githubUrl: "https://github.com/rinckodev/constatic",
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
