import React from 'react'
import Head from 'next/head'
import Blog from '../components/blog/Blog'

const blog = () => {
return (

<div>
    {/* ---------------------- Head ---------------------- */}

    <Head>
        <title>Bespoke Programming | Blog</title>
        <meta name="description" content="Bespoke Programming | Blog" />
        <link rel="icon" href="/svg/logo.svg" />
    </Head>

    <Blog />
</div>
)
}

export default blog