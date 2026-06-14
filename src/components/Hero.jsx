import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone, FiGift, FiChevronDown } from 'react-icons/fi';

function Hero() {
    return (
        <section className="hero-section">
            <div className="container hero-grid">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="hero-copy"
                >
                    <span className="eyebrow">Premium Commercial Print Partner</span>
                    <h1>Premium Printing Solutions Crafted with Precision</h1>
                    <p>
                        From business cards to brochures, pamphlets, banners, packaging, and large-format prints, we deliver uncompromising quality for businesses that demand the very best.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="button button-primary">
                            Contact Us <FiArrowRight />
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdP9is09X1UaI_DJg4WaRq8aIDzal7HP7UxpkSOMtPQQW2wdw/viewform"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                        >
                            Order Now
                        </a>
                        <a href="https://wa.me/919324595111" target="_blank" rel="noreferrer" className="button button-outline">
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="hero-visual"
                >
                    <div className="hero-card hero-card-top">
                        <p>Luxury Brand Collaterals</p>
                    </div>
                    <div className="hero-card hero-card-main">
                        <span>Premium Print Craft</span>
                        <p>Creative branding, flawless finishes, and delivery across India.</p>
                    </div>
                    <div className="hero-card hero-card-bottom">
                        <p>Corporate Identity</p>
                    </div>
                    <div className="hero-hero-shape" />
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.28 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="hero-glow"
            />
            <div className="hero-scroll-hint">
                <FiChevronDown />
            </div>
        </section>
    );
}

export default Hero;
