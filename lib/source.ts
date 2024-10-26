import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/i18n";
import icons from "@/icons";
import { createElement } from "react";

export const source = loader({
  i18n, baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
});
