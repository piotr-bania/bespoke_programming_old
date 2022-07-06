import React from 'react'
import CanvasQuote from '../components/CanvasQuote'

const quote = () => {
return (

<section id="quoteForm">

  {/* ---------------------- Canvas ---------------------- */}
  <CanvasQuote />

  <h3 className="heading">Get a <abbr className='purple'>Free <br /></abbr>Quote.</h3>

  <p className='description'>Please feel free to add as much information as possible. The more you tell me, the more
    accurate I can be with
    your
    quote.</p>

  <div className="gradientPurple"></div>

  <form action="https://formsubmit.co/contact@piotrbania.dev" method="POST">

    <div className="generalInfo">
      <h4>General Info</h4>
      {/* Name */}
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name="name" placeholder="Name" required />
      {/* Email */}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Email Address" required></input>
      {/* Contact Number */}
      <label htmlFor="contactNumber">Contact Number</label>
      <input type="tel" id="tel" name="tel" placeholder="Telephone Number"></input>
      {/* Business Overview */}
      <label htmlFor="businessOverview">Business Overview</label>
      <textarea id="businessOverview" name="text" placeholder="Business Overview" cols="30" rows="8"></textarea>
      {/* Project Overview */}
      <label htmlFor="projectOverview">Project Overview</label>
      <textarea id="projectOverview" name="text" placeholder="Project Overview" cols="30" rows="8"></textarea>
    </div>

    <div className="budget">
      <h4>What is your Budget?</h4>
      <label htmlFor="budget">What is your budget?</label>
      <p><input id="budget" name="radio" type="checkbox"></input> £250 - £499</p>
      <p><input id="budget" name="radio" type="checkbox"></input> £500 - £999</p>
      <p><input id="budget" name="radio" type="checkbox"></input> £1,000 - £1,499</p>
      <p><input id="budget" name="radio" type="checkbox"></input> £1,500 - £2,499</p>
      <p><input id="budget" name="radio" type="checkbox"></input> £2,500+</p>

      <h4>Will your site require regular updates?</h4>
      <label htmlFor="updates">Any Updates?</label>
      <p><input id="updates" name="checkbox" type="radio"></input> Yes</p>
      <p><input id="updates" name="checkbox" type="radio"></input> No</p>

      <h4>Just a few more bits of information</h4>
      {/* Deadline */}
      <label htmlFor="deadline">Is there a deadline?</label>
      <textarea id="deadline" name="text" placeholder="Is there a deadline for the project?" cols="30"
        rows="3"></textarea>
      {/* Questions */}
      <label htmlFor="questions">Additional questions</label>
      <textarea id="questions" name="text" placeholder="Is there anything else you would like to ask?" cols="30"
        rows="3"></textarea>

      <button type="submit" value="Send">Submit</button>
    </div>

  </form>

</section>
)
}

export default quote