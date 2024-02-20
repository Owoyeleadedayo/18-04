import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import PriceSection from "../components/PriceSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <PriceSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
