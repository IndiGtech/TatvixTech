import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-32 h-12 md:w-48 md:h-16">
                <Image
                    src="/Logo2.png"
                    alt="Tatvix Logo"
                    fill
                    priority
                    sizes="(max-width: 768px) 128px, 192px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
        </Link>
    );
}
