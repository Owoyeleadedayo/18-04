import Nav from '../components/Nav'
import { Box,  Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import MobileNav from '../components/MobileNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';


const About = () => {
    const [isLargerThan767] = useMediaQuery("(min-width: 769px)");

  return (
    <>
      <Box
        bg={"#D5B981"}
        bgSize={"530px"}
        backgroundRepeat={"no-repeat"}
        bgPosition={"top right"}
        background-blend-mode={"soft-light"}
      >
        {isLargerThan767 ? <Nav /> : <MobileNav />}
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          my={"0px"}
          mx={"auto"}
          p={"100px"}
        >
          <Heading as={"h1"} fontSize={"80px"}>
            About Us
          </Heading>
        </Flex>
      </Box>
      <AboutSection />
      <Footer />
    </>
  );
}

export default About
