import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import PriceSection from "../components/PriceSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import BarberSection from "../components/BarberSection";
const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <PriceSection />
      <BarberSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
