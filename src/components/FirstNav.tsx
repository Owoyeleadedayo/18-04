import { Box, Flex, Heading, Text} from '@chakra-ui/react'
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import Colors from '../constants/colors';

const FirstNav = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        height={"60px"}
        width={"full"}
        bg={Colors.purple}
        display={{ md: "flex", base: "none" }}
      >
        <Flex
          display={"flex"}
          height={"100%"}
          px={"40px"}
          justifyContent={"space-between"}
          width={"100vw"}
        >
          <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            display={"flex"}
          >
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              borderX={"0.5px solid rgba(255, 255, 255, .15)"}
              px={"10px"}
              height={"60px"}
            >
              <Heading
                as={"h2"}
                textAlign={"center"}
                color={"#eeeeee"}
                fontSize={"15px"}
                fontFamily={"Roboto"}
                fontWeight={600}
                m={"0"}
              >
                8:00am - 9:00pm
              </Heading>
              <Text
                textAlign={"center"}
                color={"#eeeeee"}
                fontSize={"12px"}
                fontFamily={"Roboto"}
                fontWeight={400}
              >
                Opening Hour Mon - Fri
              </Text>
            </Box>
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              borderX={"0.5px solid rgba(255, 255, 255, .15)"}
              px={"10px"}
              height={"60px"}
            >
              <Heading
                as={"h2"}
                textAlign={"center"}
                color={"#eeeeee"}
                fontSize={"15px"}
                fontFamily={"Roboto"}
                fontWeight={600}
                m={"0"}
              >
                +234 810003888
              </Heading>
              <Text
                textAlign={"center"}
                color={"#eeeeee"}
                fontSize={"12px"}
                fontFamily={"Roboto"}
                fontWeight={400}
              >
                Call Us For Appointment
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderLeft={"1px solid rgba(255, 255, 255, .15)"}
              // p={"7px"}
              _hover={{
                background: "white",
                ".directChild": {
                  color: "#D5B981 !important",
                },
              }}
            >
              <a href="https://x.com/04_183978?s=21">
                <Box
                  className="directChild"
                  as={FaXTwitter}
                  color="white"
                  fontSize={"24px"}
                  textAlign={"center"}
                  fontFamily={"Roboto"}
                  w={"60px"}
                  h={"30px"}
                />
              </a>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderX={"1px solid rgba(255, 255, 255, .15)"}
              _hover={{
                background: "white",
                ".directChild2": {
                  color: "#D5B981 !important",
                },
              }}
            >
              <a href="https://www.instagram.com/18_04_salon?igsh=NHZnd2Z2dzRuZHE5&utm_source=qr">
                <Box
                  className="directChild2"
                  as={FaInstagram}
                  color="white"
                  fontSize={"24px"}
                  textAlign={"center"}
                  w={"60px"}
                  h={"30px"}
                />
              </a>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderRight={"1px solid rgba(255, 255, 255, .15)"}
              // p={"7px"}
              _hover={{
                background: "white",
                ".directChild3": {
                  color: "#D5B981 !important",
                },
              }}
            >
              <a href="https://www.tiktok.com/@18_04_salon?_t=8jguB80M5vK&_r=1">
                <Box
                  className="directChild3"
                  as={FaTiktok}
                  color="white"
                  fontSize={"24px"}
                  textAlign={"center"}
                  w={"60px"}
                  h={"30px"}
                />
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default FirstNav
