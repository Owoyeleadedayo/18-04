import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Input,
  Grid,
  GridItem,
  useMediaQuery,
  Textarea,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Nav from "../components/Nav";
import { FaInstagram, FaLocationDot, FaPhoneFlip, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import MobileNav from "../components/MobileNav";
import image from "../assets/Images/hero.png";
import Image2 from "../assets/Images/blog-2.jpg";
import Image3 from "../assets/Images/about.jpg";
const Home = () => {
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
        <Flex
          bg={"white"}
          flexDirection={"column"}
          gap={"50px"}
          px={{ lg: "80px", base: "20px" }}
          mb={{ lg: "100px", base: "50px" }}
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
        <Flex
          pt={{ lg: "100px", base: "50px" }}
          bg={"white"}
          flexDirection={"column"}
          gap={"50px"}
          px={{ lg: "80px", base: "20px" }}
          mb={{ lg: "100px", base: "50px" }}
        >
          <Stack
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              position={"relative"}
              fontSize={"16px"}
              fontFamily={"Roboto"}
              fontWeight={600}
              color={"#797979"}
              mb={"5px"}
              textAlign={"center"}
              maxW={"600px"}
            >
              Our Best Pricing
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
              We Provide Best Price in the City
            </Heading>
          </Stack>
          <Flex pt={"45px"} justifyContent={"center"}>
            <Grid
              templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
              gap={"20px"}
            >
              <GridItem>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  bg={"rgba(29, 36, 52, .04)"}
                  justifyContent={"flex-start"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={"30px"}
                  transition={".3s"}
                  _hover={{
                    background: "#D5B981",
                  }}
                >
                  <Image
                    src={Image2}
                    objectFit={"cover"}
                    position={"relative"}
                    maxW={{ base: "100%", sm: "200px" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      background: "transparent",
                      border: "1px solid red",
                      zIndex: 1,
                    }}
                  />
                  <Stack>
                    <CardBody>
                      <Heading
                        as={"h2"}
                        mb={"8px"}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={600}
                        whiteSpace={"nowrap"}
                      >
                        Hair Cut
                      </Heading>
                      <Heading
                        as={"h3"}
                        m={0}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={400}
                        color={"#333333"}
                      >
                        $9.99
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  bg={"rgba(29, 36, 52, .04)"}
                  justifyContent={"flex-start"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={"30px"}
                  transition={".3s"}
                  _hover={{
                    background: "#D5B981",
                  }}
                >
                  <Image
                    src={Image2}
                    objectFit={"cover"}
                    position={"relative"}
                    maxW={{ base: "100%", sm: "200px" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      background: "transparent",
                      border: "1px solid red",
                      zIndex: 1,
                    }}
                  />
                  <Stack>
                    <CardBody>
                      <Heading
                        as={"h2"}
                        mb={"8px"}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={600}
                        whiteSpace={"nowrap"}
                      >
                        Hair Cut
                      </Heading>
                      <Heading
                        as={"h3"}
                        m={0}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={400}
                        color={"#333333"}
                      >
                        $9.99
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  bg={"rgba(29, 36, 52, .04)"}
                  justifyContent={"flex-start"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={"30px"}
                  transition={".3s"}
                  _hover={{
                    background: "#D5B981",
                  }}
                >
                  <Image
                    src={Image2}
                    objectFit={"cover"}
                    position={"relative"}
                    maxW={{ base: "100%", sm: "200px" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      background: "transparent",
                      border: "1px solid red",
                      zIndex: 1,
                    }}
                  />
                  <Stack>
                    <CardBody>
                      <Heading
                        as={"h2"}
                        mb={"8px"}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={600}
                        whiteSpace={"nowrap"}
                      >
                        Hair Cut
                      </Heading>
                      <Heading
                        as={"h3"}
                        m={0}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={400}
                        color={"#333333"}
                      >
                        $9.99
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  bg={"rgba(29, 36, 52, .04)"}
                  justifyContent={"flex-start"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={"30px"}
                  transition={".3s"}
                  _hover={{
                    background: "#D5B981",
                  }}
                >
                  <Image
                    src={Image2}
                    objectFit={"cover"}
                    position={"relative"}
                    maxW={{ base: "100%", sm: "200px" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      background: "transparent",
                      border: "1px solid red",
                      zIndex: 1,
                    }}
                  />
                  <Stack>
                    <CardBody>
                      <Heading
                        as={"h2"}
                        mb={"8px"}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={600}
                        whiteSpace={"nowrap"}
                      >
                        Hair Cut
                      </Heading>
                      <Heading
                        as={"h3"}
                        m={0}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={400}
                        color={"#333333"}
                      >
                        $9.99
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  bg={"rgba(29, 36, 52, .04)"}
                  justifyContent={"flex-start"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={"30px"}
                  transition={".3s"}
                  _hover={{
                    background: "#D5B981",
                  }}
                >
                  <Image
                    src={Image2}
                    objectFit={"cover"}
                    position={"relative"}
                    maxW={{ base: "100%", sm: "200px" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      background: "transparent",
                      border: "1px solid red",
                      zIndex: 1,
                    }}
                  />
                  <Stack>
                    <CardBody>
                      <Heading
                        as={"h2"}
                        mb={"8px"}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={600}
                        whiteSpace={"nowrap"}
                      >
                        Hair Cut
                      </Heading>
                      <Heading
                        as={"h3"}
                        m={0}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={400}
                        color={"#333333"}
                      >
                        $9.99
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  bg={"rgba(29, 36, 52, .04)"}
                  justifyContent={"flex-start"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={"30px"}
                  transition={".3s"}
                  _hover={{
                    background: "#D5B981",
                  }}
                >
                  <Image
                    src={Image2}
                    objectFit={"cover"}
                    position={"relative"}
                    maxW={{ base: "100%", sm: "200px" }}
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      background: "transparent",
                      border: "1px solid red",
                      zIndex: 1,
                    }}
                  />
                  <Stack>
                    <CardBody>
                      <Heading
                        as={"h2"}
                        mb={"8px"}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={600}
                        whiteSpace={"nowrap"}
                      >
                        Hair Cut
                      </Heading>
                      <Heading
                        as={"h3"}
                        m={0}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        fontWeight={400}
                        color={"#333333"}
                      >
                        $9.99
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex
          bg={"white"}
          w={"full"}
          flexDir={{ lg: "row", base: "column" }}
          h={{ lg: "80vh", base: "100%" }}
        >
          <Flex
            w={"40%"}
            h={"100%"}
            mx={0}
            bgImage={`url('${Image3}')`}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            display={{ lg: "flex", base: "none" }}
          ></Flex>
          <Box bg={"#1d2434"} w={{ lg: "60%", base: "100%" }}>
            <Stack
              pt={"50px"}
              pb={"20px"}
              pr={{ lg: "90px", base: "20px" }}
              pl={{ lg: "90px", base: "20px" }}
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

export default Home;
