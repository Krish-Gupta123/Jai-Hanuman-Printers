import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
// import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Payment from './components/Payment.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';

function App() {
    return (
        <div className="app-shell">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
                {/* <Gallery /> */}
                <Testimonials />
                <Payment />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
}

export default App;
