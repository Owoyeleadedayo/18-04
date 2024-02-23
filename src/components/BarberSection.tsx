import {  Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Image4 from "../assets/Images/team-1.jpg";

const BarberSection = () => {
  return (
    <>
      <Flex
        bg={"white"}
        flexDirection={"column"}
        gap={"50px"}
        px={{ lg: "80px", base: "20px" }}
        mt={{ lg: "0px", base: "50px" }}
        mb={{ lg: "0px", base: "50px" }}
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
            Our Barber Team
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
            Meet Our Hair Cut Expert Barber
          </Heading>
        </Stack>
        <Flex justifyContent={"center"}>
          <Grid
            templateColumns={{
              lg: "repeat(4, 1fr)",
              md: "repeat(2, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            gap={"20px"}
          >
            <GridItem>
              <Flex
                height={"300px"}
                width={"280px"}
                position={"relative"}
                mb={{ lg: "", base: "80px" }}
              >
                <Image src={Image4} alt="about" width={"100%"} h={"100%"} />
                <Flex
                  position={"absolute"}
                  height={"280px"}
                  width={"230px"}
                  bg={"transparent"}
                  border={"1px solid #F6F6F7"}
                  my={"20px"}
                  mx={"20px"}
                  zIndex={1}
                  transition={".3s"}
                  _hover={{
                    borderColor: "#D5B981",
                    ".child": {
                      background: "#D5B981",
                    },
                  }}
                >
                  <Box
                    className="child"
                    position={"absolute"}
                    py={"30px"}
                    px={"15px"}
                    bgColor={"#F6F6F7"}
                    my={"230px"}
                    mx={"0px"}
                    width={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    zIndex={2}
                    transition={".3s"}
                    _hover={{
                      background: "#D5B981",
                    }}
                  >
                    <Heading
                      as={"h2"}
                      fontSize={"18px"}
                      fontWeight={600}
                      textAlign={"center"}
                    >
                      Adam Phillips
                    </Heading>
                    <Text textAlign={"center"} m={"0px"} color={"#333333"}>
                      Master Barber
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                height={"300px"}
                width={"280px"}
                position={"relative"}
                mb={{ lg: "", base: "80px" }}
              >
                <Image src={Image4} alt="about" width={"100%"} h={"100%"} />
                <Flex
                  position={"absolute"}
                  height={"280px"}
                  width={"230px"}
                  bg={"transparent"}
                  border={"1px solid #F6F6F7"}
                  my={"20px"}
                  mx={"20px"}
                  zIndex={1}
                  transition={".3s"}
                  _hover={{
                    borderColor: "#D5B981",
                    ".child": {
                      background: "#D5B981",
                    },
                  }}
                >
                  <Box
                    className="child"
                    position={"absolute"}
                    py={"30px"}
                    px={"15px"}
                    bgColor={"#F6F6F7"}
                    my={"230px"}
                    mx={"0px"}
                    width={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    zIndex={2}
                    transition={".3s"}
                    _hover={{
                      background: "#D5B981",
                    }}
                  >
                    <Heading
                      as={"h2"}
                      fontSize={"18px"}
                      fontWeight={600}
                      textAlign={"center"}
                    >
                      Adam Phillips
                    </Heading>
                    <Text textAlign={"center"} m={"0px"} color={"#333333"}>
                      Master Barber
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                height={"300px"}
                width={"280px"}
                position={"relative"}
                mb={{ lg: "", base: "80px" }}
              >
                <Image src={Image4} alt="about" width={"100%"} h={"100%"} />
                <Flex
                  position={"absolute"}
                  height={"280px"}
                  width={"230px"}
                  bg={"transparent"}
                  border={"1px solid #F6F6F7"}
                  my={"20px"}
                  mx={"20px"}
                  zIndex={1}
                  transition={".3s"}
                  _hover={{
                    borderColor: "#D5B981",
                    ".child": {
                      background: "#D5B981",
                    },
                  }}
                >
                  <Box
                    className="child"
                    position={"absolute"}
                    py={"30px"}
                    px={"15px"}
                    bgColor={"#F6F6F7"}
                    my={"230px"}
                    mx={"0px"}
                    width={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    zIndex={2}
                    transition={".3s"}
                    _hover={{
                      background: "#D5B981",
                    }}
                  >
                    <Heading
                      as={"h2"}
                      fontSize={"18px"}
                      fontWeight={600}
                      textAlign={"center"}
                    >
                      Adam Phillips
                    </Heading>
                    <Text textAlign={"center"} m={"0px"} color={"#333333"}>
                      Master Barber
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                height={"300px"}
                width={"280px"}
                position={"relative"}
                mb={{ lg: "", base: "80px" }}
              >
                <Image src={Image4} alt="about" width={"100%"} h={"100%"} />
                <Flex
                  position={"absolute"}
                  height={"280px"}
                  width={"230px"}
                  bg={"transparent"}
                  border={"1px solid #F6F6F7"}
                  my={"20px"}
                  mx={"20px"}
                  zIndex={1}
                  transition={".3s"}
                  _hover={{
                    borderColor: "#D5B981",
                    ".child": {
                      background: "#D5B981",
                    },
                  }}
                >
                  <Box
                    className="child"
                    position={"absolute"}
                    py={"30px"}
                    px={"15px"}
                    bgColor={"#F6F6F7"}
                    my={"230px"}
                    mx={"0px"}
                    width={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    zIndex={2}
                    transition={".3s"}
                    _hover={{
                      background: "#D5B981",
                    }}
                  >
                    <Heading
                      as={"h2"}
                      fontSize={"18px"}
                      fontWeight={600}
                      textAlign={"center"}
                    >
                      Adam Phillips
                    </Heading>
                    <Text textAlign={"center"} m={"0px"} color={"#333333"}>
                      Master Barber
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export default BarberSection
