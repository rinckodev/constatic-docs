import { BlogPosts } from "@/components/sections/blog/BlogPosts";
import { FaNewspaper } from "react-icons/fa6";


export default async function Page() {

    return <div className="flex flex-col gap-2 px-12 py-4 w-full">
        <div className="flex flex-col gap-2 p-8 border rounded-md
        ">
            <h1 className="flex items-center gap-4 text-4xl font-bold">
               <FaNewspaper/> Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
                Fique por dentro das novidades, atualizações e dicas sobre a CLI e a base de bots
            </p>
        </div>

        <BlogPosts />
    </div>
}