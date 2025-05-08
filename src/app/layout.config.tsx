import { ConstaticTitle } from "@/components/constatic/ConstaticTitle";
import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaBook } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  i18n,
  themeSwitch: {
    enabled: false,
  },
  githubUrl: "https://github.com/rinckodev/constatic",
  nav: {
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
};
