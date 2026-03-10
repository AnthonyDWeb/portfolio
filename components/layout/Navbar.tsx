import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="navbar">

            <nav className="navbar-container">

                {/* Logo */}

                <Link href="/" className="navbar-logo">
                    <Image
                        src="/arkanya-logo.png"
                        alt="Arkanya logo"
                        width={120}
                        height={32}
                        priority
                    />
                </Link>

                {/* Navigation */}

                <div className="navbar-links">

                    <Link href="/#about" className="navbar-link">
                        À propos
                    </Link>

                    <Link href="/#expertise" className="navbar-link">
                        Expertise
                    </Link>

                    <Link href="/#method" className="navbar-link">
                        Méthode
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

            </nav>

        </header>
    )
}