import React from 'react'

const Footer = () => {
return (
<div>
    <section className="footer">
        <div className="contact">
            <form action="https://formsubmit.co/contact@piotrbania.dev" method='POST'>

                <h4>Get a Quote</h4>
                
                <input type="text" id='fname' name="firstname" placeholder="name *" required />
                
                <input type="email" id="email" name="email" placeholder="email address *" required></input>

                <textarea name="subject" id="subject" placeholder="message *" cols="30" rows="10"></textarea>

                <button type='submit' value="Send" >Submit</button>
            </form>
        </div>
    </section>
</div>
)
}

export default Footer