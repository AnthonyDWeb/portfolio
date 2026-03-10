import Link from "next/link"
import {ReactNode} from "react"

type Props = {
    href: string
    children: ReactNode
    className?: string
}

export default function ExternalLink({
                                         href,
                                         children,
                                         className
                                     }: Props) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className={className}
        >
            {children}
        </Link>
    )
}