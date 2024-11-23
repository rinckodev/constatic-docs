import { ConstaticTitle } from "@/components/decoration/ConstaticTitle";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaBook } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <ConstaticTitle/>,
  },
  links: [
    {
      text: <span className="flex gap-2 items-center"><FaBook/> Docs</span>,
      url: "/docs",
      active: "nested-url",
    },
    {
      text: <span className="flex gap-2 items-center"><FaNewspaper/> Blog</span>,
      url: "/blog",
      active: "nested-url",
    },
  ],
    i18n: true
};