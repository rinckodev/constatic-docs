import { defaultMdxComponents } from "@/components/mdxComponents";
import { BlogTag } from "@/components/sections/blog/BlogTag";
import { buttonVariants } from "@/components/ui/button";
import { blog } from "@/lib/source";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const page = blog.getPage([params.slug]);
    if (!page) notFound();

    return <main className="flex flex-col gap-4 px-2 lg:px-12 py-6">
        <div className="container rounded-xl px-8 py-4 border">
            <h1 className="mb-2 text-3xl font-bold darK:text-white">
                {page.data.title}
            </h1>
            <p className="mb-4 dark:text-white/80">{page.data.description}</p>
            {page.data.tags &&
                <div className="mb-2 flex flex-wrap gap-2">
                    {page.data.tags.map(tag => <BlogTag key={tag} tag={tag} />)}
                </div>
            }
            <Link href="/blog" className={buttonVariants({ size: "sm", variant: "secondary" })}>Voltar</Link>
        </div>
        <article className="container flex flex-col-reverse md:flex-row gap-2">
            <div className="prose min-w-0 flex-1">
                <page.data.body components={defaultMdxComponents} />
            </div>
            <div className="flex flex-col gap-4 md:border-l md:p-4 text-sm lg:w-[250px]">
                <div>
                    <p className="font-medium text-muted-foreground">
                        {new Date(page.data.date ?? page.file.name).toLocaleDateString()}
                    </p>
                </div>
                <InlineTOC items={page.data.toc} defaultOpen />
            </div>
        </article>
    </main>
}