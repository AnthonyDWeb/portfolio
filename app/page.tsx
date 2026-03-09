import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Expertise from "@/components/sections/Expertise"
import Projects from "@/components/sections/Projects"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/layout/Footer"

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar/>
            <Hero/>
            <Expertise/>
            <Projects/>
            <CTA/>
            <Footer/>
        </main>
    )
}