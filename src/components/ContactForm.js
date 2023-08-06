import './ContactForm.css'
import './ButtonMain.css'


function ContactForm() {
    
    return (
        <form className='Contact__form' action="https://api.web3forms.com/submit" method="POST" autocomplete="off">
            <input type="hidden" name="access_key" value="f4a7629a-570b-4080-bcf2-a7c1065a1810"></input>
            <input type="text" name='name' placeholder="NAME" />
            <input type="email" placeholder="EMAIL" name="email" autocomplete="off" />
            <textarea placeholder="MESSAGE" name='message' autocorrect="on" />
            <button type="submit" className='button-main'>Send Message</button>
        </form>
    )
}

export default ContactForm