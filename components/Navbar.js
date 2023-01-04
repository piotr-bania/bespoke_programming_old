import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <header>
                <Link href="/">
                <Image className='logo' src="/svg/logo.svg" alt="logo" width={60} height={60} />
                </Link>
                <nav>
                    <li>
                        <div className="menu">
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/services"><a>Services</a></Link>
                            <Link href="/process"><a>Process</a></Link>
                            <Link href="/portfolio"><a>Portfolio</a></Link>
                            <Link href="/blog"><a>Blog</a></Link>
                            <Link href="/faq"><a>FAQ</a></Link>
                        </div>
                        <div className="burger">
                            <button onClick={()=> setIsOpen(!isOpen)}>
                                MENU
                            </button>
                        </div>
                    </li>
                    <Link href="/quote"><button className='button'>Pricing</button></Link>
                </nav>
            </header>
        </section>
    )
}

export default Navbar