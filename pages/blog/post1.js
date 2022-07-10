import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Post1 from '../../components/posts/post1'

const post1 = () => {
return (

<div>
    {/* ---------------------- Head ---------------------- */}

    <Head>
        <title>Bespoke Programming | Post</title>
        <meta name="description" content="Bespoke Programming | Post" />
        <link rel="icon" href="/svg/logo.svg" />
    </Head>

    <Post1 />

</div>

)
}

export default post1