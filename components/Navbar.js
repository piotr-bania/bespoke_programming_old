import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
return (
<section>
    <header>
        <Link href="/"><Image className='logo' src="/svg/logo.svg" alt="logo" width={60} height={60}/></Link>
        <nav>
            <li>
                <Link href="/"><a>Home</a></Link>
                <Link href="/services"><a>Services</a></Link>
                <Link href="/process"><a>Process</a></Link>
                <Link href="/portfolio"><a>Portfolio</a></Link>
                <Link href="/blog"><a>Blog</a></Link>
                <Link href="/faq"><a>FAQ</a></Link>
            </li>
            <Link href="/quote"><button>Pricing</button></Link>
        </nav>
    </header>
</section>
)
}

export default Navbar