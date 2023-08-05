import './ContactForm.css'
import './ButtonMain.css'


function ContactForm() {
    
    return (
        <form className='Contact__form' autocomplete="off">
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" name="email" autocomplete="off" />
            <textarea placeholder="MESSAGE" autocorrect="on" />
            <button type="submit" className='button-main'>Send Message</button>
        </form>
    )
}

export default ContactForm