import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Image3 from "../assets/Images/about.jpg";


const AboutSection = () => {
  return (
    <>
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
    </>
  );
}

export default AboutSection
