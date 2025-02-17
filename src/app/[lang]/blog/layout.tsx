import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { cn } from "@/lib/cn";
import { GridPattern } from "@/components/decoration/GridPattern";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return <HomeLayout {...baseOptions}>
    {children}
    <GridPattern
      width={60}
      height={60}
      className={cn(
        "[mask-image:linear-gradient(-160deg,white,transparent,transparent)] ",
        "opacity-40"
      )}
    />
  </HomeLayout>;
}
