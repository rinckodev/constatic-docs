import Image from "next/image";

export function LayoutTitle() {
    return <div className="flex justify-center items-center">
        <Image src={"/constatic.svg"} alt="test" width={32} height={32} />
        <p>Constatic</p>
    </div>
}