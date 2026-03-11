"use client"

import Link from "next/link"
import Image from "next/image"
import {useEffect, useState} from "react"
import {EllipsisVertical} from "lucide-react"
import ExternalLink from "@/components/ui/ExternalLink";

export default function Navbar() {

    const [mobile, setMobile] = useState(false)
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleResize = () => {
            setMobile(window.innerWidth < 1000)
        }

        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop ||
                document.body.scrollTop

            setScrolled(scrollTop > 10)
        }

        handleResize()
        handleScroll()

        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll, {passive: true})

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const mobileMode = mobile || scrolled

    return (
        <header
            className={`navbar relative transition-all duration-300 ${
                scrolled
                    ? "bg-black/60 backdrop-blur-md border-b border-neutral-800"
                    : "bg-transparent"
            }`}
        >

            <nav className="navbar-container">

                {/* LOGO */}

                <ExternalLink href="https://arkanya.fr" className="navbar-logo">
                    <Image
                        src="/icons/arkanya-logo.png"
                        alt="Arkanya logo"
                        width={50}
                        height={50}
                        priority
                    />
                </ExternalLink>

                {/* DESKTOP MENU */}

                <div
                    className={`navbar-links transition-all duration-300 ${
                        mobileMode
                            ? "opacity-0 pointer-events-none scale-95"
                            : "opacity-100 scale-100"
                    }`}
                >

                    <Link href="/#about" className="navbar-link">
                        À propos
                    </Link>

                    <Link href="/#expertise" className="navbar-link">
                        Expertise
                    </Link>

                    <Link href="/#projects" className="navbar-link">
                        Projets
                    </Link>

                    <Link href="/#stack" className="navbar-link">
                        Stack
                    </Link>

                    <Link
                        href="https://arkanya.fr/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-link"
                    >
                        Contact
                    </Link>

                </div>

                {/* MOBILE BUTTON */}

                <button
                    className={`ml-auto text-white border-2 border-[#4ade80] rounded-full p-1 cursor-pointer transition-all duration-300 ${
                        mobileMode
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90 pointer-events-none"
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    <EllipsisVertical size={28}/>
                </button>

            </nav>

            {/* MOBILE MENU */}

            <div
                className={`absolute left-0 top-full w-full transition-all duration-300 ease-out ${
                    open && mobileMode
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >

                <div
                    className="flex flex-col items-center gap-6 py-8 bg-black/80 backdrop-blur-md border-t border-neutral-800">

                    <Link href="/#about" onClick={() => setOpen(false)}>
                        À propos
                    </Link>

                    <Link href="/#expertise" onClick={() => setOpen(false)}>
                        Expertise
                    </Link>

                    <Link href="/#projects" onClick={() => setOpen(false)}>
                        Projets
                    </Link>

                    <Link href="/#stack" onClick={() => setOpen(false)}>
                        Stack
                    </Link>

                    <Link
                        href="https://arkanya.fr/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>

                </div>

            </div>

        </header>
    )
}