import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container section-grid">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="section-copy"
                >
                    <span className="section-label">About Us</span>
                    <h2>Printing Excellence Since 1997</h2>
                    <p>
                        Jai Hanuman Printers has been delivering premium printing solutions since 1997. With decades of experience, we specialize in high-quality commercial and corporate printing services across India.
                    </p>
                    <p>
                        Our PAN India Corporate Printing services include Design, Print, Pack, Dispatch, Maintain MIS, and After-Sales Support. Our niche is print branding and marketing products. We also help insurance advisors, mediclaim consultants, financial advisors, and businesses across India communicate their ideas effectively through premium print solutions.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 42 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    className="about-visual"
                >
                    <div className="about-card">
                        <span>25+ Years</span>
                        <p>Trusted print craftsmanship for corporate brands and marketing campaigns.</p>
                    </div>
                    <div className="about-image">
                        <div className="about-image-overlay" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
