import { Flex, Heading, Stack, Text, Grid, GridItem, Image, useDisclosure} from "@chakra-ui/react"
import { useState } from "react";
import Image3 from "../assets/Images/portfolio-1.jpg";
import Image4 from "../assets/Images/portfolio-3.jpg";
import Image5 from "../assets/Images/portfolio-4.jpg";
import Image6 from "../assets/Images/portfolio-2.jpg";
import Image7 from "../assets/Images/portfolio-6.jpg";
import Image8 from "../assets/Images/portfolio-5.jpg";


const GallerySection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const things = [
      {
        name: "",
        type: "hair_cut",
        image: Image3,
      },
      {
        name: "",
        type: "beard_style",
        image: Image4,
      },
      {
        name: "",
        type: "color_wash",
        image: Image5,
      },
      {
        name: "",
        type: "color_wash",
        image: Image6,
      },
      {
        name: "",
        type: "hair_cut",
        image: Image7,
      },
      {
        name: "",
        type: "beard_style",
        image: Image8,
      },
    ];
    const [filteredArray, setFilteredArray] = useState(things)
    const filterThingsArray = (param: string) => {
        if(param === ""){
            setFilteredArray(things); 
        }else{
            setFilteredArray(things.filter((i) => i.type === param));
        }
        
    }

  return (
    <>
      <Flex
        pt={{ lg: "100px", base: "50px" }}
        bg={"white"}
        flexDirection={"column"}
        gap={"30px"}
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
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          gap={"10px"}
        >
          <Flex
            border={"2px solid #1d2434"}
            py={"8px"}
            px={"15px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#1d2434"}
            transition={".3s"}
            cursor={"pointer"}
            _hover={{
              background: "#1d2434",
              color: "#D5B981",
            }}
            onClick={() => filterThingsArray("")}
          >
            <Text fontSize={"14px"} fontFamily={"Roboto"} fontWeight={600}>
              All
            </Text>
          </Flex>
          <Flex
            border={"2px solid #1d2434"}
            py={"8px"}
            px={"15px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#1d2434"}
            transition={".3s"}
            cursor={"pointer"}
            _hover={{
              background: "#1d2434",
              color: "#D5B981",
            }}
            onClick={() => filterThingsArray("hair_cut")}
          >
            <Text fontSize={"14px"} fontFamily={"Roboto"} fontWeight={600}>
              Hair Style
            </Text>
          </Flex>
          <Flex
            border={"2px solid #1d2434"}
            py={"8px"}
            px={"15px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#1d2434"}
            transition={".3s"}
            cursor={"pointer"}
            _hover={{
              background: "#1d2434",
              color: "#D5B981",
            }}
            onClick={() => filterThingsArray("beard_style")}
          >
            <Text fontSize={"14px"} fontFamily={"Roboto"} fontWeight={600}>
              Beard Style
            </Text>
          </Flex>
          <Flex
            border={"2px solid #1d2434"}
            py={"8px"}
            px={"15px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#1d2434"}
            transition={".3s"}
            cursor={"pointer"}
            _hover={{
              background: "#1d2434",
              color: "#D5B981",
            }}
            onClick={() => filterThingsArray("color_wash")}
          >
            <Text fontSize={"14px"} fontFamily={"Roboto"} fontWeight={600}>
              Color & Wash
            </Text>
          </Flex>
        </Flex>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
          gap={"20px"}
        >
          {filteredArray.map((item, index: number) => (
            <GridItem key={index} >
              <Flex position={"relative"} width={"100%"}>
                <Image
                  src={item.image}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
                <Flex
                  position={"absolute"}
                  bg={"transparent"}
                  border={"1px solid #F6F6F7"}
                  top={"30px"}
                  bottom={"30px"}
                  right={"30px"}
                  left={"30px"}
                  zIndex={1}
                  transition={".3s"}
                  _hover={{
                    borderColor: "#D5B981",
                  }}
                />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default GallerySection
