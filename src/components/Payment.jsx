import { motion } from 'framer-motion';
import { FaGooglePay, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';

function Payment() {
    const [message, setMessage] = useState('Click Pay Now to use Google Pay with your UPI app.');

    const handlePayClick = () => {
        const url = 'upi://pay?pa=sarafsantosha@okaxis&pn=Hashita%20Saraf&aid=uGICAgICr7qLbNg';
        window.location.href = url;
        setTimeout(() => {
            setMessage('If the payment prompt does not appear, please open this page on your mobile device or in a UPI-enabled app.');
        }, 800);
    };

    return (
        <section className="section payment-section">
            <div className="container payment-card">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="payment-copy"
                >
                    <span className="section-label">Payment</span>
                    <h2>Pay via Google Pay</h2>
                    <p>Secure your premium order with a quick UPI payment. Our team will confirm the details immediately after payment.</p>
                    <button className="button button-primary" onClick={handlePayClick} type="button">
                        <FaGooglePay /> Pay Now
                    </button>
                    <p className="payment-note">{message}</p>
                </motion.div>
                <motion.div
                    className="payment-visual"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="payment-panel">
                        <div className="payment-icon">
                            <FaShieldAlt />
                        </div>
                        <div>
                            <span>UPI ID</span>
                            <strong>sarafsantosha@okaxis</strong>
                        </div>
                    </div>
                    <div className="payment-info">
                        <p>Note: For the best experience, complete this payment through a mobile UPI app or a browser with UPI support.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Payment;
