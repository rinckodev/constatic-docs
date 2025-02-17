import { ConstaticTitle } from "@/components/decoration/ConstaticTitle";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaBook, FaNewspaper } from "react-icons/fa";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  disableThemeSwitch: true,
  githubUrl: "https://github.com/rinckodev/constatic",
  nav: {
    transparentMode: "none",
    title: <ConstaticTitle/>,
  },
  links: [
    {
      text: <span className="flex gap-2 items-center"><FaBook/>Docs</span>,
      url: "/docs",
      active: "nested-url",
    },
    {
      text: <span className="flex gap-2 items-center"><FaNewspaper/>Blog</span>,
      url: "/blog",
      active: "nested-url",
    },
  ],
  i18n: true
};
