import { Card, CardBody, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Image2 from "../assets/Images/blog-2.jpg";


const PriceSection = () => {
  return (
    <>
      <section>
        <Flex
          bg={"white"}
          flexDirection={"column"}
          px={{ lg: "80px", base: "20px" }}
          pb={{ lg: "100px", base: "50px" }}
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
    </>
  );
}

export default PriceSection
