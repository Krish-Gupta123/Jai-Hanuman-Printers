import { motion } from 'framer-motion';
import { FaArrowUp, FaPhone, FaWhatsapp, FaGooglePay } from 'react-icons/fa';

function FloatingButtons() {
    return (
        <div className="floating-actions">
            <motion.a
                whileHover={{ y: -4 }}
                className="fab fab-whatsapp"
                href="https://wa.me/919324595111"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
            >
                <FaWhatsapp />
            </motion.a>
            <motion.a whileHover={{ y: -4 }} className="fab fab-call" href="tel:+919324595111" title="Call">
                <FaPhone />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                className="fab fab-pay"
                href="upi://pay?pa=sarafsantosha@okaxis&pn=Hashita%20Saraf&aid=uGICAgICr7qLbNg"
                title="Google Pay"
            >
                <FaGooglePay />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                className="fab fab-top"
                href="#home"
                title="Scroll to Top"
            >
                <FaArrowUp />
            </motion.a>
        </div>
    );
}

export default FloatingButtons;
