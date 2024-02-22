import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import GallerySection from "../components/GallerySection";

const Gallery = () => {
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
            Gallery
          </Heading>
        </Flex>
        <GallerySection />
      </Box>
    </>
  );
}

export default Gallery
