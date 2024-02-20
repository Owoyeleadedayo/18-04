import React from "react";
import Nav from "../components/Nav";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import MobileNav from "../components/MobileNav";
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
            Contact
          </Heading>
        </Flex>
      </Box>
      <section>
        <Flex
          bg={"white"}
          w={"full"}
          flexDir={{ md: "row", base: "column" }}
          h={{ md: "80vh", base: "100%" }}
          my={{ md: "100px", base: "50px" }}
        >
          <Flex
            w={"40%"}
            h={"100%"}
            mx={0}
            bgImage={`url('${Image3}')`}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            display={{ md: "flex", base: "none" }}
          ></Flex>
          <Box bg={"#1d2434"} w={{ md: "60%", base: "100%" }}>
            <Stack
              pt={"50px"}
              pb={"20px"}
              pr={{ md: "90px", base: "20px" }}
              pl={{ md: "90px", base: "20px" }}
              pos={"relative"}
            >
              <Flex flexDirection={"column"} gap={"40px"}>
                <Input
                  placeholder={"Your Name"}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontFamily={"Roboto"}
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Input
                  placeholder={"Your Email"}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  fontFamily={"Roboto"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Input
                  placeholder={"Subject"}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontSize={"18px"}
                  fontFamily={"Roboto"}
                  fontStyle={"normal"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Textarea
                  placeholder={"Message"}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontSize={"18px"}
                  fontFamily={"Roboto"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Button
                  bg={"#1d2434"}
                  color={"#D5B981"}
                  border={"1px solid #D5B981"}
                  w={"130px"}
                  h={"50px"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                  fontSize={"18px"}
                  outline={"none"}
                  transition={".3s ease-out"}
                  _hover={{
                    border: "1px solid #D5B981",
                    color: "#1d2434",
                    background: "#D5B981",
                  }}
                  _focus={{
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    outline: "none !important",
                  }}
                >
                  Send Message
                </Button>
              </Flex>
            </Stack>
          </Box>
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
};

export default About;
