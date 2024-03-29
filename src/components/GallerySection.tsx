import { Flex, Heading, Stack, Text, Grid, GridItem, Image, Modal, ModalOverlay, useDisclosure, ModalContent, ModalBody, ModalFooter, Button,} from "@chakra-ui/react"
import { useState } from "react";
import Image3 from "../assets/Images/portfolio-1.jpg";
import Image4 from "../assets/Images/portfolio-3.jpg";
import Image5 from "../assets/Images/portfolio-4.jpg";
import Image6 from "../assets/Images/portfolio-2.jpg";
import Image7 from "../assets/Images/portfolio-6.jpg";
import Image8 from "../assets/Images/portfolio-5.jpg";


const GallerySection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalImage, setModalImage] = useState('');

    const things = [
      {
        name: "",
        type: "maleHair",
        image: Image3,
      },
      {
        name: "",
        type: "femaleHair",
        image: Image4,
      },
      {
        name: "",
        type: "maleHair",
        image: Image5,
      },
      {
        name: "",
        type: "femaleHair",
        image: Image6,
      },
      {
        name: "",
        type: "femaleHair",
        image: Image7,
      },
      {
        name: "",
        type: "maleHair",
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
            onClick={() => filterThingsArray("maleHair")}
          >
            <Text fontSize={"14px"} fontFamily={"Roboto"} fontWeight={600}>
              Male Hair
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
            onClick={() => filterThingsArray("femaleHair")}
          >
            <Text fontSize={"14px"} fontFamily={"Roboto"} fontWeight={600}>
              Female Hair
            </Text>
          </Flex>
        </Flex>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
          gap={"20px"}
        >
          {filteredArray.map((item, index: number) => (
            <GridItem key={index}>
              <Flex
                position={"relative"}
                width={"100%"}
                onClick={() => {
                  setModalImage(item.image);
                  onOpen();
                }}
              >
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
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={0}>
              <Image src={modalImage} w={"100%"} />
            </ModalBody>
            <ModalFooter>
              <Button
                justifyContent={"center"}
                alignContent={"center"}
                w={"130px"}
                my={0}
                fontSize={"18px"}
                fontWeight={600}
                mx={"auto"}
                bg={"#D5B981"}
                color={"#1d2434"}
                outline={"none !important"}
                _hover={{
                  border: "1px solid #1d2434 !important",
                  outline: "1px solid #1d2434 !important",
                }}
                _focus={{
                  background: "#D5B981 !important",
                }}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default GallerySection
