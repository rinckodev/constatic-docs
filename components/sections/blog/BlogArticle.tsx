import type { BlogPost } from "@/lib/source";
import { BlogTag } from "./BlogTag";
import Link from "next/link";

interface BlogArticleProps {
    post: BlogPost,
}
export function BlogArticle({ post }: BlogArticleProps) {
    return <Link href={post.url}>
        <article
            className="flex flex-col gap-2 p-4
            hover:cursor-pointer hover:bg-white/5
            transition-all duration-500 ease-in-out
            dark:text-neutral-300 dark:hover:text-white
            border-b border-border h-36 rounded-md
            ">
            <div className="flex justify-between items-center gap-2">
                <h2 className="text-xl font-semibold">
                    {post.data.title}
                </h2>
                <time className="text-xs text-muted-foreground">
                    {new Date(post.data.date ?? post.file.name).toLocaleDateString()}
                </time>
            </div>
            {post.data.tags &&
                <div className="flex flex-wrap gap-2">
                    {post.data.tags.map(tag => <BlogTag key={tag} tag={tag} />)}
                </div>
            }
            <p className="h-1/2 overflow-hidden">{post.data.description}</p>
        </article>
    </Link>
}