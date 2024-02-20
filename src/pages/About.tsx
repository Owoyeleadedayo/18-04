import React from 'react'
import Nav from '../components/Nav'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import MobileNav from '../components/MobileNav';
import {
  FaInstagram,
  FaLocationDot,
  FaPhoneFlip,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image3 from "../assets/Images/about.jpg";


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
      <section>
        <Flex
          bg={"white"}
          px={{ lg: "100px", base: "20px" }}
          py={{ lg: "100px", base: "50px" }}
          flexDirection={{ lg: "row", base: "column" }}
          gap={"30px"}
        >
          <Flex w={{ lg: "30%", base: "100%" }} justifyContent={"flex-start"}>
            <Box h={"300px"} w={"300px"} bg={"#1d2434"} />
            <Box
              position={"absolute"}
              height={"300px"}
              width={"300px"}
              ml={"40px"}
              mt={"40px"}
            >
              <Image
                src={Image3}
                alt="about"
                width={"100%"}
                pr={"10px"}
                h={"100%"}
                mb={{ lg: "0px", base: "30px" }}
                objectFit={"cover"}
                _after={{
                  position: "absolute",
                  top: "-30px",
                  right: "30px",
                  bottom: "30px",
                  left: "-30px",
                  bg: "transparent",
                  border: "1px solid #ffffff",
                  zIndex: "2",
                }}
              />
            </Box>
          </Flex>
          <Flex
            flexDirection={"column"}
            w={{ lg: "70%", base: "100%" }}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={"25px"}
          >
            <Stack marginTop={"50px"}>
              <Heading
                color={"#797979"}
                fontFamily={"Roboto"}
                fontSize={"22px"}
              >
                Learn About Us
              </Heading>
              <Text
                mt={"20px"}
                fontFamily={"Roboto"}
                fontSize={"16px"}
                fontWeight={300}
                maxW={"700px"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis
                ornare velit non vulputate. Aliquam metus tortor, auctor id
                gravida condimentum, viverra quis sem. Curabitur non nisl nec
                nisi scelerisque maximus. Aenean consectetur convallis
                porttitor. Aliquam interdum at lacus non blandit.
              </Text>
            </Stack>
            <Button
              size="md"
              color={"#797979"}
              width={"100px"}
              background={"rgba(29, 36, 52, .04)"}
              outline={"none"}
              transition={".3s"}
              fontSize={"16px"}
              fontFamily={"Roboto"}
              _hover={{
                border: "#D5B981",
                background: "#D5B981",
                outline: "none",
              }}
              _focus={{
                border: "rgba(29, 36, 52, .04)",
                outline: "none",
              }}
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
      </section>
      <section>
        <Box
          bg={"#D5B981"}
          w={"100%"}
          mt={"100px"}
          justifyContent={{ lg: "none", base: "center" }}
          alignItems={{ lg: "none", base: "center" }}
        >
          <Grid
            templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap={{ lg: "20px", base: "5px" }}
            p={"40px"}
          >
            <GridItem>
              <Flex flexDirection={"column"} gap={"10px"} px={"50px"}>
                <Heading
                  as={"h2"}
                  fontFamily={"Roboto"}
                  fontWeight={600}
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  Salon Address
                </Heading>
                <Flex flexDirection={"row"} gap={"5px"}>
                  <Box mt={"5px"} fontSize={"24px"}>
                    <FaLocationDot />
                  </Box>
                  <Text
                    fontSize={{ lg: "22px", base: "20px" }}
                    fontFamily={"Roboto"}
                    fontWeight={400}
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    123 Street, New York, USA
                  </Text>
                </Flex>
                <Flex flexDirection={"row"} gap={"6px"}>
                  <Box mt={"5px"} fontSize={"24px"}>
                    <FaPhoneFlip />
                  </Box>
                  <Text
                    fontSize={{ lg: "22px", base: "20px" }}
                    fontFamily={"Roboto"}
                    fontWeight={400}
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    +012 345 67890
                  </Text>
                </Flex>
                <Flex flexDirection={"row"} gap={"6px"}>
                  <Box mt={"5px"} fontSize={"24px"}>
                    <MdEmail />
                  </Box>
                  <Text
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                    fontSize={{ lg: "22px", base: "20px" }}
                    fontFamily={"Roboto"}
                    fontWeight={400}
                  >
                    info@example.com
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Heading
                as={"h1"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                fontSize={{ lg: "100px", base: "80px" }}
                py={{ lg: "20px", base: "5px" }}
              >
                18-04
              </Heading>
            </GridItem>
            <GridItem>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
                py={{ lg: "70px", base: "10px" }}
              >
                <Link
                  href="https://x.com/04_183978?s=21"
                  _hover={{
                    color: "#1d2434",
                  }}
                >
                  <Box as={FaXTwitter} fontSize={"30px"} />
                </Link>
                <Link
                  href="https://www.instagram.com/18_04_salon?igsh=NHZnd2Z2dzRuZHE5&utm_source=qr"
                  _hover={{
                    color: "#1d2434",
                  }}
                >
                  <Box as={FaInstagram} fontSize={"30px"} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@18_04_salon?_t=8jguB80M5vK&_r=1"
                  _hover={{
                    color: "#1d2434",
                  }}
                >
                  <Box as={FaTiktok} fontSize={"30px"} />
                </Link>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </section>
    </>
  );
}

export default About
