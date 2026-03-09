import Link from "next/link"

export default function Navbar() {
    return (
        <header className="w-full py-6 border-b border-neutral-800">
            <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">

                <div className="font-semibold text-[#00ff9c]">
                    AD
                </div>

                <div className="flex gap-8 text-sm text-neutral-300">

                    <Link href="#expertise" className="hover:text-[#00ff9c] transition">
                        Expertise
                    </Link>

                    <Link href="#projects" className="hover:text-[#00ff9c] transition">
                        Projets
                    </Link>

                    <Link href="https://arkanya.fr" className="hover:text-[#00ff9c] transition">
                        Arkanya
                    </Link>

                </div>

            </nav>
        </header>
    )
}