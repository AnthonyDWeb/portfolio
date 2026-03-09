import Link from "next/link"

export default function CTA() {
    return (
        <section className="py-24 px-6 text-center">

            <h2 className="text-3xl font-semibold mb-8">
                Envie de créer un projet ?
            </h2>

            <Link
                href="https://arkanya.fr/contact"
                className="px-8 py-4 bg-[#00ff9c] text-black font-semibold rounded-md hover:brightness-110 transition"
            >
                Contacter Arkanya
            </Link>

        </section>
    )
}