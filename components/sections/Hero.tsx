import Link from "next/link"

export default function Hero() {
    return (
        <section className="py-32 px-6 text-center">

            <h1 className="text-5xl md:text-6xl font-bold">
                Anthony <span className="text-[#00ff9c]">Delforge</span>
            </h1>

            <p className="mt-6 text-xl text-neutral-300">
                Développeur web indépendant
            </p>

            <p className="mt-6 max-w-xl mx-auto text-neutral-400">
                Je conçois des solutions digitales et applications web sur mesure.
            </p>

            <div className="flex justify-center gap-4 mt-10">

                <Link
                    href="https://arkanya.fr"
                    className="px-6 py-3 bg-[#00ff9c] text-black rounded-md font-medium hover:brightness-110 transition"
                >
                    Découvrir Arkanya
                </Link>

                <Link
                    href="#projects"
                    className="px-6 py-3 border border-neutral-600 rounded-md hover:border-[#00ff9c] hover:text-[#00ff9c] transition"
                >
                    Voir mes projets
                </Link>

            </div>

        </section>
    )
}