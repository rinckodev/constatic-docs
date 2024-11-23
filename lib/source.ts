import { blogCollection, docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { i18n } from "./i18n";
import { createElement } from "react";
import icons from "@/icons";

export const source = loader({
  i18n, baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogCollection, [])
});

export type BlogPost = NonNullable<ReturnType<typeof blog.getPage>>