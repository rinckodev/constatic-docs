import { File, Files, Folder } from "fumadocs-ui/components/files";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { PiFileLockFill } from "react-icons/pi";
import { TbBrandTypescript, TbSettings } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export function BaseStructure() {
    return <Files>
        <Folder name=".vscode">
            <File name="extensions.json" icon={<VscVscode />}/>
            <File name="project.code-snippets" icon={<VscVscode />}/>
            <File name="settings.json" icon={<VscVscode />}/>
        </Folder>
        <Folder name="src">
            <Folder name="discord">
                <Folder name="base">
                    <Folder name="commands">
                        <File name="handlers.ts" icon={<TbBrandTypescript />} />
                        <File name="manager.ts" icon={<TbBrandTypescript />} />
                        <File name="types.ts" icon={<TbBrandTypescript />} />
                    </Folder>
                    <Folder name="events">
                        <File name="handlers.ts" icon={<TbBrandTypescript />} />
                        <File name="manager.ts" icon={<TbBrandTypescript />} />
                        <File name="types.ts" icon={<TbBrandTypescript />} />
                    </Folder>
                    <Folder name="responders">
                        <File name="handlers.ts" icon={<TbBrandTypescript />} />
                        <File name="manager.ts" icon={<TbBrandTypescript />} />
                        <File name="types.ts" icon={<TbBrandTypescript />} />
                    </Folder>
                    <File name="app.ts" icon={<TbBrandTypescript />} />
                    <File name="base.env.ts" icon={<TbBrandTypescript />} />
                    <File name="base.error.ts" icon={<TbBrandTypescript />} />
                    <File name="base.logger.ts" icon={<TbBrandTypescript />} />
                    <File name="base.version.ts" icon={<TbBrandTypescript />} />
                    <File name="bootstrap.ts" icon={<TbBrandTypescript />} />
                    <File name="constants.ts" icon={<TbBrandTypescript />} />
                    <File name="creators.ts" icon={<TbBrandTypescript />} />
                    <File name="index.ts" icon={<TbBrandTypescript />} />
                </Folder>
                <Folder name="commands">
                    <Folder name="public">
                        <File name="counter.ts" icon={<TbBrandTypescript />} />
                        <File name="ping.ts" icon={<TbBrandTypescript />} />
                    </Folder>
                </Folder>
                <Folder name="events">
                    <Folder name="commom">
                        <File name="error.ts" icon={<TbBrandTypescript />} />
                    </Folder>
                </Folder>
                <Folder name="responders">
                    <Folder name="buttons">
                        <File name="remind.ts" icon={<TbBrandTypescript />} />
                    </Folder>
                </Folder>
                <File name="index.ts" icon={<TbBrandTypescript />} />
            </Folder>
            <Folder name="functions">
                <File name="index.ts" icon={<TbBrandTypescript />} />
            </Folder>
            <File name="env.ts" icon={<TbBrandTypescript />} />
            <File name="index.ts" icon={<TbBrandTypescript />} />
        </Folder>
        <File name=".env" icon={<PiFileLockFill />} />
        <File name=".gitignore" icon={<FaGitAlt />} />
        <File name="README.md" icon={<LuInfo />} />
        <File name="package.json" icon={<FaNodeJs />}/>
        <File name="tsconfig.json" icon={<TbBrandTypescript />} />
        <File name="settings.json" icon={<TbSettings />} />
    </Files>
}