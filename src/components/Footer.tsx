import { Box, Button, Flex, Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react';
import {
  FaInstagram,
  FaLocationDot,
  FaPhoneFlip,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section>
        <Box
          bg={"#D5B981"}
          w={"100%"}
          justifyContent={{ lg: "center", base: "flex-start" }}
          alignItems={{ lg: "center", base: "flex-start" }}
          mt={{ lg: "30px", base: "50px" }}
        >
          <Grid
            templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap={{ lg: "20px", base: "25px" }}
            p={"20px"}
          >
            <GridItem>
              <Flex
                flexDirection={"column"}
                gap={"10px"}
                px={{ lg: "60px", base: "20px" }}
              >
                <Heading as={"h3"}>About Company</Heading>
                <Text maxW={"400px"}>
                  Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo
                  dictum nec non quam. Tortor eu placerat rhoncus, lorem quam
                  iaculis felis, sed lacus neque id eros.
                </Text>
                <Flex
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                  gap={"20px"}
                >
                  <Link
                    href="https://x.com/04_183978?s=21"
                    _hover={{
                      color: "#999999",
                    }}
                  >
                    <Box as={FaXTwitter} fontSize={"24px"} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/18_04_salon?igsh=NHZnd2Z2dzRuZHE5&utm_source=qr"
                    _hover={{
                      color: "#999999",
                    }}
                  >
                    <Box as={FaInstagram} fontSize={"24px"} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@18_04_salon?_t=8jguB80M5vK&_r=1"
                    _hover={{
                      color: "#999999",
                    }}
                  >
                    <Box as={FaTiktok} fontSize={"24px"} />
                  </Link>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                flexDirection={"column"}
                gap={"10px"}
                px={{ lg: "40px", base: "20px" }}
              >
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
              <Flex
                flexDirection={"column"}
                gap={"10px"}
                px={{ lg: "0px", base: "20px" }}
              >
                <Heading as={"h3"} fontSize={"24px"}>
                  Appoint an Haircut Today
                </Heading>
                <Flex
                  flexDirection={{ lg: "column", md: "row", base: "row" }}
                  justifyContent={{ lg: "", base: "flex-start" }}
                  alignContent={{ lg: "", base: "flex-start" }}
                  gap={{ lg: "10px", md: "5px", base: "0px" }}
                >
                  <Button
                    size={"sm"}
                    fontFamily={"Roboto"}
                    w={"160px"}
                    h={"40px"}
                    ml={{ lg: "50px", base: "" }}
                    mt={{ lg: "", md: "5px", base: "20px" }}
                    bg={"#D5B981"}
                    border={"2px solid #1d2434"}
                    color={"#1d2434"}
                    outline={"none !important"}
                    _hover={{
                      background: "#1d2434",
                      color: "#D5B981",
                      border: "1px solid #1d2434 !important",
                      outline: "1px solid #1d2434 !important",
                    }}
                    _focus={{
                      background: "#D5B981 !important",
                    }}
                  >
                    Make an Appointment
                  </Button>
                  <Flex
                    flexDirection={{
                      lg: "column",
                      md: "column",
                      base: "column",
                    }}
                  >
                    <Text
                      fontWeight={600}
                      fontSize={"18px"}
                      fontFamily={"Roboto"}
                      ml={{ lg: "60px", md: "60px", base: "30px" }}
                    >
                      Opening Hours
                    </Text>
                    <Flex
                      flexDir={{ lg: "row", md: "row", base: "column" }}
                      gap={{ lg: "10px", md: "10px", base: "0px" }}
                      ml={{ lg: "20px", md: "10px", base: "" }}
                    >
                      <Text
                        fontWeight={400}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        ml={{ lg: "0px", base: "30px" }}
                      >
                        Mon - Fri:
                      </Text>
                      <Text
                        fontWeight={400}
                        fontSize={"16px"}
                        fontFamily={"Roboto"}
                        ml={{ lg: "0px", md: "0px", base: "30px" }}
                      >
                        8:00am - 9:00pm
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </section>
    </>
  );
}

export default Footer
