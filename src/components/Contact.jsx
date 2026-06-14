import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-grid">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="contact-copy"
                >
                    <span className="section-label">Contact</span>
                    <h2>Connect with Jai Hanuman Printers</h2>
                    <p>Reach out for premium print branding, corporate print production, and PAN India delivery from our Mumbai headquarters.</p>
                    <div className="contact-list">
                        <div className="contact-item">
                            <FaPhone />
                            <div>
                                <span>Call</span>
                                <a href="tel:+919324595111">+91 93245 95111</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaWhatsapp />
                            <div>
                                <span>WhatsApp</span>
                                <a href="https://wa.me/919324595111" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope />
                            <div>
                                <span>Email</span>
                                <a href="mailto:licprinterno1@gmail.com">licprinterno1@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaClock />
                            <div>
                                <span>Business Hours</span>
                                <p>Monday – Sunday · Open 24 Hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true }}
                    className="contact-map-card"
                >
                    <div className="map-frame">
                        <iframe
                            title="Jai Hanuman Printers Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.262780549436!2d72.833366!3d18.934878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dba1612963%3A0xe1beba1d534ff3d0!2s250%2F252%20Perin%20Nariman%20St%2C%20Borabazar%20Precinct%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1697565080372!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="map-details">
                        <div>
                            <h3>Lucky Mansion</h3>
                            <p>252, Perin Nariman Street, Borabazar Precinct, Fort, Mumbai, Maharashtra – 400001, India</p>
                        </div>
                        <a
                            href="https://www.google.com/maps/place/250%2F252,+Perin+Nariman+St,+Borabazar+Precinct,+Fort,+Mumbai,+Maharashtra+400001/@18.9348781,72.8355554,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1dba1612963:0xe1beba1d534ff3d0!8m2!3d18.9348781!4d72.8355554!16s%2Fg%2F11cshtlvvj"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary button-small"
                        >
                            View on Google Maps <FaExternalLinkAlt />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
