import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
return (
<div>
    <header>
        <Image className='logo' src="/svg/logo.svg" alt="logo" width={60} height={60} />
        <nav>
            <li>
                <Link href="/"><a>Home</a></Link>
                <Link href="/services"><a>Services</a></Link>
                <Link href="/portfolio"><a>Portfolio</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/pricing"><a>Pricing</a></Link>
            </li>
            <Link href="/contact"><button>Contact</button></Link>
        </nav>
    </header>
</div>
)
}

export default Navbar