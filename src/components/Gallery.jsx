import { motion } from 'framer-motion';

const galleryItems = [
    { title: 'Business Cards', label: 'Business Cards' },
    { title: 'Brochures', label: 'Brochures' },
    { title: 'Flyers', label: 'Flyers' },
    { title: 'Pamphlets', label: 'Pamphlets' },
    { title: 'Posters', label: 'Posters' },
    { title: 'Packaging', label: 'Packaging' },
    { title: 'Banners', label: 'Banners' },
    { title: 'Stickers', label: 'Stickers' },
    { title: 'Machines', label: 'Printing Machines' },
    { title: 'Finished', label: 'Finished Products' },
];

function Gallery() {
    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-label">Gallery</span>
                    <h2>Signature Prints and Production Showcase</h2>
                </div>
                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="gallery-item"
                        >
                            <div className="gallery-image" />
                            <div className="gallery-overlay">
                                <p>{item.title}</p>
                                <span>{item.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
