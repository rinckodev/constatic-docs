import { blogCollection, docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";
import icons from "./icons";
import { createElement } from "react";
import { IoSparkles } from "react-icons/io5";
import { HiMiniSparkles } from "react-icons/hi2";
import { PiMagicWandFill } from "react-icons/pi";
import { createMDXSource } from "fumadocs-mdx";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  i18n,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
  pageTree: {
    attachFile(node, file) {
      if (!file) return node;

      if (file.data.data.tag){
        const iconTag = file.data.data.tag === "new" 
        ? <HiMiniSparkles className="text-green-500"/> 
        : <PiMagicWandFill className="text-yellow-500" /> 
        node.name = (
          <>
            {node.name}
            {iconTag}
          </>
        );
      }

      return node;
    },
  }
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogCollection, [])
})

export type BlogPost = NonNullable<ReturnType<typeof blog.getPage>>;