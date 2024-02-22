import { Flex, Heading, Stack, Text } from "@chakra-ui/react"


const GallerySection = () => {
  return (
    <>
      <Flex
        pt={{ lg: "100px", base: "50px" }}
        bg={"white"}
        flexDirection={"column"}
        gap={"30px"}
        px={{ lg: "80px", base: "20px" }}
      >
        <Stack
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={'100px'}
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
            Barber Image Gallery
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
            Some Images From Our Barber Gallery
          </Heading>
        </Stack>
      </Flex>
    </>
  );
}

export default GallerySection
