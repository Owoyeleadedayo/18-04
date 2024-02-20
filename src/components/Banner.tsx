import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import image from "../assets/Images/hero.png";

const Banner = () => {
    const [isLargerThan767] = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Box
        bg={"#D5B981"}
        h={{ lg: "90vh", base: "300px" }}
        bgImage={{ lg: `url('${image}')`, base: "" }}
        bgSize={"530px"}
        backgroundRepeat={"no-repeat"}
        bgPosition={"top right"}
        background-blend-mode={"soft-light"}
      >
        {isLargerThan767 ? <Nav /> : <MobileNav />}
        <Flex
          px={{ lg: "60px", base: "20px" }}
          height={{ lg: "calc(100vh - 350px)", base: "200px" }}
          display={"flex"}
          alignItems={{ lg: "flex-start", base: "center" }}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Heading
            as={"h2"}
            fontFamily={"Roboto"}
            fontWeight={600}
            fontSize={{ lg: "55px", base: "28px" }}
            textAlign={"center"}
          >
            Welcome To 18-04
          </Heading>
          <Text
            fontSize={{ lg: "24px", base: "24px" }}
            fontFamily={"Roboto"}
            textAlign={"center"}
            maxW={{ lg: "600px", base: "400px" }}
          >
            Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi
            ornare velit non. Aliqua metus tortor auctor quis sem.
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Banner
