import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

import * as bs from "react-icons/bs";
import * as bi from "react-icons/bi";
import * as im from "react-icons/im";
import * as fa from "react-icons/fa";
import * as fa6 from "react-icons/fa6";
import * as go from "react-icons/go";
import * as hi from "react-icons/hi";
import * as hi2 from "react-icons/hi2";
import * as io from "react-icons/io";
import * as lu from "react-icons/lu";
import * as md from "react-icons/md";
import * as ri from "react-icons/ri";
import * as si from "react-icons/si";
import * as tb from "react-icons/tb";
import * as pi from "react-icons/pi";
import * as ti from "react-icons/ti";

import { createElement } from "react";
import { languages } from "./i18n";
import { LocalIcons } from "@/svgs";

export const icons: Record<string, string> = Object.assign(
  {}, ri, bi, lu, pi, si, md, im, hi, ti, fa6, io, fa, bs, go, hi2, tb, LocalIcons
)
export const { getPage, getPages, getLanguages, pageTree } = loader({
  baseUrl: "/", 
  rootDir: "docs",
  languages, 
  source: createMDXSource(map),
  icon(icon) {
    if (icon && icon in icons) {
      return createElement(icons[icon]);
    }
  },
});