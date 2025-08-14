import { baseOptions } from "@/app/layout.config";
import { GridPattern } from "@/components/constatic/grid";
import { cn } from "@/lib/utils";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";

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
