import React from 'react'
import Head from 'next/head'
import Blog from '/components/Blog'
import Overlay1 from '../components/overlay/Overlay1'

const blog = () => {
return (

<div>
    {/* ---------------------- Head ---------------------- */}

    <Head>
        <title>Bespoke Programming | Blog</title>
        <meta name="description" content="Bespoke Programming | Blog" />
        <link rel="icon" href="/svg/logo.svg" />
    </Head>

    <Overlay1 />
    <Blog />

</div>
)
}

export default blog