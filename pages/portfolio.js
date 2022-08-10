import React from 'react'
import Head from 'next/head'
import Overlay4 from '../components/overlay/Overlay4'

import * as THREE from 'three'
import testVertexShader from '../shaders/vertex.glsl'
import testFragmentShader from '../shaders/fragment.glsl'

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
    </section>
</div>
)
}

export default portfolio