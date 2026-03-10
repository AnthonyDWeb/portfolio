import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import {stack} from "@/data/stack"

export default function Stack() {
    return (
        <section className="section">

            <Container>

                <SectionTitle>
                    Technologies
                </SectionTitle>

                <div className="flex flex-wrap justify-center gap-6 mt-12">

                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-300"
                        >
              {tech}
            </span>
                    ))}

                </div>

            </Container>

        </section>
    )
}