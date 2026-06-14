import { motion } from 'framer-motion';
import { FaBusinessTime, FaCalendarAlt, FaEnvelopeOpenText, FaLayerGroup, FaPrint, FaRocket, FaStar, FaTicketAlt, FaUserTie, FaWallet, FaBoxOpen, FaClipboardList, FaGift, FaShapes, FaCompactDisc, FaSmile, FaGlobe, FaCertificate, FaStamp } from 'react-icons/fa';

const services = [
    { icon: FaBusinessTime, title: 'Business Cards', description: 'Executive print design for bold professional introductions.' },
    { icon: FaUserTie, title: 'Visiting Cards', description: 'Premium visiting cards with refined finishes and brand clarity.' },
    { icon: FaEnvelopeOpenText, title: 'Flyers', description: 'Impactful flyer campaigns designed for high response.' },
    { icon: FaCalendarAlt, title: 'Pamphlets', description: 'Elegant pamphlets for product launches and corporate events.' },
    { icon: FaPrint, title: 'Brochures', description: 'Multi-panel brochures for polished brand storytelling.' },
    { icon: FaTicketAlt, title: 'Posters', description: 'High-impact posters with crisp render and display-ready color.' },
    { icon: FaLayerGroup, title: 'Banners', description: 'Large-format banners built for premium trade shows and events.' },
    { icon: FaShapes, title: 'Flex Printing', description: 'Flexible signage solutions for retail environments and exhibitions.' },
    { icon: FaStamp, title: 'Stickers', description: 'Custom stickers for packaging, branding, and product labels.' },
    { icon: FaClipboardList, title: 'Letterheads', description: 'Corporate letterheads with elegant, consistent branding.' },
    { icon: FaWallet, title: 'Bill Books', description: 'Professional bill books crafted for business operations.' },
    { icon: FaGift, title: 'Wedding Cards', description: 'Luxurious wedding cards with premium textures and style.' },
    { icon: FaGift, title: 'Invitation Cards', description: 'Memorable invitations for celebrations and corporate ceremonies.' },
    { icon: FaCertificate, title: 'Certificates', description: 'Formal certificates with a polished finish and sharp detail.' },
    { icon: FaBoxOpen, title: 'Packaging Printing', description: 'Custom packaging printing that elevates product perception.' },
    { icon: FaGlobe, title: 'Corporate Printing', description: 'Complete corporate collateral for high-value enterprise clients.' },
    { icon: FaRocket, title: 'Branding Materials', description: 'Brand systems and print assets to strengthen market presence.' },
    { icon: FaStar, title: 'Marketing Materials', description: 'Marketing prints designed for campaigns, launches, and promotions.' },
    { icon: FaCompactDisc, title: 'Large Format Printing', description: 'Impactful large format printing for storefronts and exhibitions.' },
    { icon: FaSmile, title: 'Custom Printing', description: 'Tailored print solutions for bespoke requirements and special projects.' },
];

function Services() {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-label">Services</span>
                    <h2>Premium Printing Services for Every Business Need</h2>
                </div>
                <div className="service-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.article
                                key={service.title}
                                whileHover={{ y: -12, boxShadow: '0 18px 45px rgba(15, 23, 42, 0.16)' }}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="service-card"
                            >
                                <div className="service-icon">
                                    <Icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
