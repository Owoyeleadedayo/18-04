import React from "react";
import Nav from "../components/Nav";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
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
import Image2 from "../assets/Images/blog-2.jpg";

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
            Services
          </Heading>
        </Flex>
      </Box>
      <section>
        <Flex
          bg={"white"}
          flexDirection={"column"}
          gap={"50px"}
          px={{ lg: "80px", base: "20px" }}
          my={{ lg: "100px", base: "50px" }}
        >
          <Flex
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              position={"relative"}
              fontSize={"16px"}
              fontFamily={"Roboto"}
              color={"#797979"}
              fontWeight={600}
              mb={"5px"}
              textAlign={"center"}
              maxW={"600px"}
            >
              Our Salon Services
            </Text>
            <Heading
              m={"0"}
              fontSize={{ lg: "50px", base: "30px" }}
              fontFamily={"Roboto"}
              fontWeight={600}
              textAlign={"center"}
              color={"#1d2434"}
              maxW={"600px"}
            >
              Best Salon and Barber Services for You
            </Heading>
          </Flex>
          <Grid
            templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap={"20px"}
          >
            <GridItem>
              <Card bg={"rgba(29, 36, 52, .04)"}>
                <Image src={Image2} objectFit={"cover"} borderRadius={"4px"} />
                <CardBody
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                  mx={"auto"}
                  my={"0"}
                  gap={"15px"}
                >
                  <Stack>
                    <Heading
                      textAlign={"center"}
                      mb={"5px"}
                      pt={"10px"}
                      pb={"15px"}
                      px={"15px"}
                      fontSize={"25px"}
                      fontFamily={"Roboto"}
                      fontWeight={700}
                    >
                      Hair Cut
                    </Heading>
                    <Text
                      textAlign={"center"}
                      fontFamily={"Roboto"}
                      fontSize={"16px"}
                      m={"0"}
                      pt={"0"}
                      pb={"5px"}
                      pr={"25px"}
                      pl={"25px"}
                    >
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </Text>
                  </Stack>
                  <Button
                    size="md"
                    py={"10px"}
                    px={"20px"}
                    color={"#1d2434"}
                    fontWeight={600}
                    width={"100px"}
                    borderRadius={"8px"}
                    background={"rgba(29, 36, 52, .04)"}
                    outline={"none"}
                    transition={".3s"}
                    fontFamily={"Roboto"}
                    fontSize={"16px"}
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
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card bg={"rgba(29, 36, 52, .04)"}>
                <Image src={Image2} objectFit={"cover"} borderRadius={"4px"} />
                <CardBody
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                  mx={"auto"}
                  my={"0"}
                  gap={"15px"}
                >
                  <Stack>
                    <Heading
                      textAlign={"center"}
                      mb={"5px"}
                      pt={"10px"}
                      pb={"15px"}
                      px={"15px"}
                      fontSize={"25px"}
                      fontFamily={"Roboto"}
                      fontWeight={700}
                    >
                      Hair Cut
                    </Heading>
                    <Text
                      textAlign={"center"}
                      fontFamily={"Roboto"}
                      fontSize={"16px"}
                      m={"0"}
                      pt={"0"}
                      pb={"5px"}
                      pr={"25px"}
                      pl={"25px"}
                    >
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </Text>
                  </Stack>
                  <Button
                    size="md"
                    py={"10px"}
                    px={"20px"}
                    color={"#1d2434"}
                    fontWeight={600}
                    width={"100px"}
                    borderRadius={"8px"}
                    background={"rgba(29, 36, 52, .04)"}
                    outline={"none"}
                    transition={".3s"}
                    fontFamily={"Roboto"}
                    fontSize={"16px"}
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
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card bg={"rgba(29, 36, 52, .04)"}>
                <Image src={Image2} objectFit={"cover"} borderRadius={"4px"} />
                <CardBody
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                  mx={"auto"}
                  my={"0"}
                  gap={"15px"}
                >
                  <Stack>
                    <Heading
                      textAlign={"center"}
                      mb={"5px"}
                      pt={"10px"}
                      pb={"15px"}
                      px={"15px"}
                      fontSize={"25px"}
                      fontFamily={"Roboto"}
                      fontWeight={700}
                    >
                      Hair Cut
                    </Heading>
                    <Text
                      textAlign={"center"}
                      fontFamily={"Roboto"}
                      fontSize={"16px"}
                      m={"0"}
                      pt={"0"}
                      pb={"5px"}
                      pr={"25px"}
                      pl={"25px"}
                    >
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </Text>
                  </Stack>
                  <Button
                    size="md"
                    py={"10px"}
                    px={"20px"}
                    color={"#1d2434"}
                    fontWeight={600}
                    width={"100px"}
                    borderRadius={"8px"}
                    background={"rgba(29, 36, 52, .04)"}
                    outline={"none"}
                    transition={".3s"}
                    fontFamily={"Roboto"}
                    fontSize={"16px"}
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
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
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
