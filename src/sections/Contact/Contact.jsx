import './Contact.scss'

import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <SectionTitle text="Contact" />
            <ContactForm />
        </section>
    )
}

export default Contact
