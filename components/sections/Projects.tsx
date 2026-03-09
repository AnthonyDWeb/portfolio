import Link from "next/link"

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-semibold text-center mb-16">
                    Projets
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <Link
                        href="https://arkanya.fr"
                        className="p-10 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-[#00ff9c] transition"
                    >
                        <h3 className="text-xl font-semibold text-[#00ff9c]">
                            Arkanya
                        </h3>

                        <p className="mt-4 text-neutral-400">
                            Studio digital spécialisé dans la création de solutions web modernes.
                        </p>

                    </Link>

                    <div
                        className="p-10 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-[#00ff9c] transition">

                        <h3 className="text-xl font-semibold text-[#00ff9c]">
                            Les Services de Mathilde
                        </h3>

                        <p className="mt-4 text-neutral-400">
                            Site vitrine pour une entreprise de services à la personne.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}