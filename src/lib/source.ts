import { blogCollection, docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { createElement } from "react";
import { i18n } from "./i18n";
import icons from "./icons";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  i18n,
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogCollection, [])
})

export type BlogPost = NonNullable<ReturnType<typeof blog.getPage>>;