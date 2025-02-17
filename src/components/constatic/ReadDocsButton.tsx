import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export function ReadDocsButton() {
    return <Link href={"/docs"}
        className="flex items-center group border rounded-2xl px-3 py-1 gap-2"
    >
        <span className="">📄 Read the docs</span>
        <FaArrowRightLong size={10} />
    </Link>
}