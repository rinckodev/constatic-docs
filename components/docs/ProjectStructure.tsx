import { File, Files, Folder } from "fumadocs-ui/components/files";

import { IoSettingsOutline } from "react-icons/io5"
import { TbBrandTypescript } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { LuFileLock2, LuInfo } from "react-icons/lu"
import { ReactNode } from "react";

interface ProjectStructureProps {
  srcFolder?: ReactNode,
}
function ProjectStructure(props: ProjectStructureProps) {
  return <div>
    <Files>
      <Folder name=".vscode">
        <File name="settings.json" icon={<IoSettingsOutline />} />
      </Folder>
      <ProjectStructureSrc {...props}/>
      <File name=".env" icon={<LuFileLock2 />} />
      <File name="package.json" icon={<FaNodeJs />} />
      <File name="tsconfig.json" icon={<TbBrandTypescript />} />
      <File name="README.md" icon={<LuInfo />} />
      <File name="settings.json" icon={<IoSettingsOutline />} />
    </Files>
  </div>
}

function ProjectStructureSrc(props: ProjectStructureProps){
    return <Folder name="src">
      <Folder name="discord" >
        <Folder name="base" >
          <File name="index.ts" icon={<TbBrandTypescript />} />
        </Folder>
        <Folder name="commands" >
          <File name="ping.ts" icon={<TbBrandTypescript />} />
        </Folder>
        <Folder name="events" >
          <File name="onMessage.ts" icon={<TbBrandTypescript />} />
        </Folder>
        <Folder name="responders" >
          <File name="click.ts" icon={<TbBrandTypescript />} />
        </Folder>
        <File name="index.ts" icon={<TbBrandTypescript />} />
      </Folder>
      <Folder name="functions" >
        <File name="index.ts" icon={<TbBrandTypescript />} />
      </Folder>
      <Folder name="settings" >
        <File name="index.ts" icon={<TbBrandTypescript />} />
      </Folder>
      {props.srcFolder}
      <File name="index.ts" icon={<TbBrandTypescript />} />
    </Folder>
}

export { ProjectStructure, ProjectStructureSrc }