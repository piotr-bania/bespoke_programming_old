import React from 'react'
import Head from 'next/head'
import Overlay2 from '../components/overlay/Overlay2'

const services = () => {
return (
<div>
  {/* ---------------------- Head ---------------------- */}

  <Head>
    <title>Bespoke Programming | Services</title>
    <meta name="description" content="Bespoke Programming | Services" />
    <link rel="icon" href="/svg/logo.svg" />
  </Head>

  <Overlay2 />

  <section id='services' className="services">
    <h3>Services.</h3>
  </section>
</div>
)
}

export default services