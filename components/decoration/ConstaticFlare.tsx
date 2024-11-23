import { cn } from "@/lib/utils";

interface ConstaticFlareProps {
    className?: string;
}
export function ConstaticFlare({ className }: ConstaticFlareProps){
    return <div aria-hidden="true" className={cn(`pointer-events-none absolute inset-0 w-full
        before:absolute before:rounded-full before:content-['']
        before:rotate-[-32deg]
        before:bg-gradient-to-r before:from-[#0141ff] before:to-[#60c5ff] 
        before:blur-[100px] before:opacity-30

        translate-y-[-200px]

        before:w-[140px] before:h-[700px]
        lg:before:w-[240px] lg:before:h-[700px]

        before:translate-x-1 lg:before:translate-x-[-100px] 
        before:translate-y-[-10px] 
    `, className)}/>
}