export interface CommomPageProps {
    params: Promise<{
        slug?: string[]
        lang: string;
    }>
}