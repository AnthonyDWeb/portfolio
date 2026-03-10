import HorizonLine from "@/components/effects/HorizonLine"
import Link from "next/link"
import ExternalLink from "@/components/ui/ExternalLink"

export default function Hero() {

    const nameGlow =
        "text-green-400 ml-4 relative drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]"

    const arkanyaGlow =
        "text-green-400 font-medium hover:underline"

    return (
        <section className="relative flex flex-col items-center text-center section-hero">

            <div className="container-main flex flex-col items-center py-20 max-w-3xl">

                <h1 className="relative text-6xl md:text-7xl font-semibold text-white mb-8">

                    <HorizonLine className="absolute top-[-10px]"/>

                    <span>Anthony</span>
                    <span className={nameGlow}>Delforge</span>

                    <HorizonLine className="absolute bottom-[-16px]"/>

                </h1>

                <p className="text-2xl text-neutral-200 mb-6">
                    Développeur web indépendant
                    <span className="text-neutral-400"> & </span>
                    fondateur de{" "}
                    <ExternalLink
                        href="https://arkanya.fr"
                        className={arkanyaGlow}
                    >
                        Arkanya
                    </ExternalLink>
                </p>

                <p className="text-neutral-400 max-w-xl mb-12 leading-relaxed">
                    Je conçois des applications web modernes, performantes
                    et évolutives pour aider les entreprises à structurer
                    leurs outils digitaux et accompagner leur croissance.
                </p>

                <div className="flex flex-wrap gap-6 justify-center">

                    <Link href="/#contact">
                        <button
                            className="
                            px-8 py-3
                            bg-green-400
                            text-black
                            rounded-lg
                            font-medium
                            hover:brightness-110
                            transition
                            cursor-pointer
                            "
                        >
                            Discuter de votre projet
                        </button>
                    </Link>

                    <Link href="/#projects">
                        <button
                            className="
                            px-8 py-3
                            border border-neutral-600
                            rounded-lg
                            text-white
                            hover:border-green-400
                            transition
                            cursor-pointer
                            "
                        >
                            Voir mes projets
                        </button>
                    </Link>

                </div>

            </div>

        </section>
    )
}