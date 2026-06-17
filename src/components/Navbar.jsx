import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../images/logo.jpeg';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            id="home"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        >
            <div className="container navbar-inner">
                <a href="#hom{logo}-logo">
                    <img src="/images/logo.jpeg" alt="Jai Hanuman Printers Logo" className="brand-mark-logo" />
                    <div>
                        <p>Jai Hanuman Printers</p>
                        <span>Printing Excellence Since 1997</span>
                    </div>
                </a>

                <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </motion.header>
    );
}

export default Navbar;
