import { FaNodeJs } from "react-icons/fa";
import { SiBun, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";
import { CodeBlock, Pre } from "../../codeblock-legacy";
import { Tab, Tabs } from "../../tabs";

interface CliCommandProps {
    packageName: string;
    className?: string;
}
export function CliCommand({ packageName, className }: CliCommandProps){
    return <>
        <Tabs items={[
        { value: "node", icon: <FaNodeJs size={18}/> },
        { value: "bun", icon: <SiBun size={18}/> },
        { value: "yarn", icon: <TbBrandYarn size={18}/> },
        { value: "pnpm", icon: <SiPnpm size={18}/> },
      ]} className={className}>
        <Tab value="node">
            <Code text={`npx ${packageName}`}/>
        </Tab>
        <Tab value="bun">
            <Code text={`bunx ${packageName}`}/>
        </Tab>
        <Tab value="yarn">
            <Code text={`yarn dlx ${packageName}`}/>
        </Tab>
        <Tab value="pnpm">            
            <Code text={`pnpm dlx ${packageName}`}/>
        </Tab>
      </Tabs>
    </>
}

interface CodeProps {
    text: string;
}
function Code({ text }: CodeProps){
    return <CodeBlock lang="bash">
        <Pre className="text-start" lang="bash">
            <code>
                {text}
            </code>
        </Pre>
    </CodeBlock>
}