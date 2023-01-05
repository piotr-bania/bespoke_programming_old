import React from 'react'
import Head from 'next/head'
import Overlay3 from '../components/overlay/Overlay3'

const process = () => {
return (

<div>
  {/* ---------------------- Head ---------------------- */}

  <Head>
    <title>Bespoke Programming | Process</title>
    <meta name="description" content="Bespoke Programming | Process" />
    <link rel="icon" href="/svg/logo.svg" />
  </Head>

  <Overlay3 />

  <section className="process">
    <h3>Process</h3>
  </section>
</div>
)
}

export default process