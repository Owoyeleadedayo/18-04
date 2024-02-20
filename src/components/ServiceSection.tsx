import { Button, Card, CardBody, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Image2 from "../assets/Images/blog-2.jpg";


const ServiceSection = () => {
  return (
    <>
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
    </>
  );
}

export default ServiceSection
