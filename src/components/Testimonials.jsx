import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        quote: 'Jai Hanuman Printers delivered a premium brochure set with stunning finish and perfect timing for our launch.',
        author: 'Ravi Mehta, Marketing Head',
        rating: 5,
    },
    {
        quote: 'Their corporate printing services are exceptional. The letterheads and business cards were exactly as envisioned.',
        author: 'Neha Kapoor, Brand Manager',
        rating: 5,
    },
    {
        quote: 'Professional service, high-quality print, and quick delivery for our PAN India campaign materials.',
        author: 'Pooja Sharma, Operations Lead',
        rating: 5,
    },
];

function Testimonials() {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-label">Testimonials</span>
                    <h2>What Our Clients Say About Our Craft</h2>
                </div>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.author}
                            whileHover={{ y: -10, boxShadow: '0 22px 45px rgba(15, 23, 42, 0.12)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="testimonial-card"
                        >
                            <div className="testimonial-stars">
                                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                    <FaStar key={idx} />
                                ))}
                            </div>
                            <p>{testimonial.quote}</p>
                            <strong>{testimonial.author}</strong>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
