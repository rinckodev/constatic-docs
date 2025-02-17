import Link from "next/link";
import { FaGithub, FaStar } from "react-icons/fa";

export function GithubButton() {
    return <Link href={"https://github.com/rinckodev/constatic"}
        target="_blank"
        className="flex items-center group border rounded-2xl px-3 py-1 gap-2"
    >
        <FaGithub className="size-4" />
        <span className="lg:hidden">Star</span>
        <span className="hidden lg:inline">Star on GitHub</span>{" "}
        <div className="flex items-center gap-1 text-sm md:flex">
            <FaStar className="size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" />
        </div>
    </Link>
}