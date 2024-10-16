import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/i18n";
import { createElement } from "react";

import icons from "@/icons";

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  i18n,
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
});
