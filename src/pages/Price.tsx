import PriceSection from "../components/PriceSection";
import Footer from "../components/Footer";
import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

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
        mb={{ lg: "100px", base: "50px" }}
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
            Price
          </Heading>
        </Flex>
      </Box>
      <PriceSection />
      <Footer />
    </>
  );
};

export default About;
