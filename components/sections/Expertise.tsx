export default function Expertise() {
    return (
        <section id="expertise" className="py-24 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-semibold text-center mb-16">
                    Expertise
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    {[
                        "Développement Web",
                        "Applications sur mesure",
                        "Performance & Architecture",
                        "Modernisation",
                    ].map((item) => (
                        <div
                            key={item}
                            className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl text-center hover:border-[#00ff9c] transition"
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}