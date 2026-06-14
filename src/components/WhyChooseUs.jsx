import { motion } from 'framer-motion';
import { FaClock, FaCrown, FaMapMarkerAlt, FaCertificate, FaDollarSign, FaBolt, FaBoxes, FaHandsHelping, FaHeadset } from 'react-icons/fa';

const features = [
    { icon: FaClock, title: 'Since 1997', description: 'Decades of premium printing expertise and trusted execution.' },
    { icon: FaCrown, title: 'Premium Print Quality', description: 'Luxury finishes and precise color calibration for every project.' },
    { icon: FaMapMarkerAlt, title: 'PAN India Corporate Services', description: 'End-to-end print fulfillment for clients across India.' },
    { icon: FaBolt, title: 'Advanced Printing Technology', description: 'Latest print presses, coatings, and finishing systems.' },
    { icon: FaDollarSign, title: 'Affordable Pricing', description: 'Competitive value for premium print materials and service.' },
    { icon: FaBolt, title: 'Fast Delivery', description: 'Reliable timelines for urgent business and campaign printing.' },
    { icon: FaBoxes, title: 'Bulk Order Support', description: 'Scalable print production for large corporate runs.' },
    { icon: FaHandsHelping, title: 'Experienced Team', description: 'Dedicated print professionals guiding every project.' },
    { icon: FaHeadset, title: 'Reliable Customer Support', description: 'Responsive assistance for orders, delivery, and after-sales.' },
];

function WhyChooseUs() {
    return (
        <section id="why" className="section why-section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-label">Why Choose Us</span>
                    <h2>Trusted Print Solutions That Deliver Results</h2>
                </div>
                <div className="feature-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="feature-card"
                            >
                                <div className="feature-icon">
                                    <Icon />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
