import React from 'react'
import Head from 'next/head'
import Overlay4 from '../components/overlay/Overlay4'
import Element1 from '../components/webgl_elements/Element1'

const portfolio = () => {
return (
<div>
    {/* ---------------------- Head ---------------------- */}

    <Head>
        <title>Bespoke Programming | Portfolio</title>
        <meta name="description" content="Bespoke Programming | Portfolio" />
        <link rel="icon" href="/svg/logo.svg" />
    </Head>

    <Overlay4 />

    <section className="portfolio">
        <h3>Portfolio.</h3>
        <Element1 />
    </section>
</div>
)
}

export default portfolio