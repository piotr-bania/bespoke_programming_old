import React from 'react'
import Image from 'next/image'

const Footer = () => {
return (
<section id="footer">

    <div className="gradientPurple leftGradient"></div>

    <div className="div1">
        <Image className='logo' src="/svg/email.svg" alt="logo" width={60} height={60} />
        <p className='uppercase'>Email</p>
        <h3>contact@bespokeprogramming.net</h3>
    </div>

    <div className="div2">
        <Image className='logo' src="/svg/telegram.svg" alt="logo" width={60} height={60} />
        <p className='uppercase'>Telegram</p>
        <h3>t.me/bespokeprogramming</h3>
    </div>

    <div className="div3">
        <h4>Bespoke Programming</h4><br />
        <p className='uppercase'>London <br />United Kingdom</p>
    </div>

    <div className="div4">
        <h4>Office Hours</h4><br />
        <p className='uppercase'>Monday - Friday <abbr className='purple'>⇀</abbr> 09.00-17.00 GMT</p>
        <p className='uppercase'>Saturday - Sunday <abbr className='purple'>⇀</abbr> 09.00-13.00 GMT</p>
    </div>

    <div className="gradientPurple rightGradient"></div>

</section>
)
}

export default Footer