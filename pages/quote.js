import React from 'react'
import QuoteForm from '../components/QuoteForm'

const quote = () => {
return (
<>
  
<section id="quoteForm">
<div className="gradientPurple"></div>
  <h3 className="heading">Get a <abbr className='purple'>Free <br /></abbr>Quote.</h3>
  <p className='description'>Please feel free to add as much information as possible. The more you tell me, the more
    accurate I can be with
    your
    quote.</p>

  <QuoteForm />
</section>

</>
)
}

export default quote