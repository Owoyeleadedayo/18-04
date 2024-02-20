import { Box, Flex, Text} from '@chakra-ui/react'
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import Colors from '../constants/colors';

const FirstNav = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        height={"0%"}
        width={"full"}
        bg={Colors.purple}
        display={{md:"flex", base:"none"}}
      >
        <Flex
          display={"flex"}
          px={"40px"}
          justifyContent={"space-between"}
          width={"100vw"}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            display={"center"}
          >
            <Box alignItems={"center"} borderX={"1px solid white"} p={"7px"}>
              <Text
                textAlign={"center"}
                color={"white"}
                fontSize={"16px"}
                fontStyle={"sans-serif"}
              >
                8:00am - 9:00pm
              </Text>
              <Text textAlign={"center"} color={"white"} fontSize={"14px"}>
                Opening Hour Mon - Fri
              </Text>
            </Box>
            <Box
              alignItems={"center"}
              borderRight={"1px solid white"}
              p={"7px"}
            >
              <Text textAlign={"center"} color={"white"}>
                +234 810003888
              </Text>
              <Text textAlign={"center"} color={"white"}>
                Call Us For Appointment
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderX={"1px solid white"}
              p={"7px"}
            >
              <a href="https://x.com/04_183978?s=21">
                <Box
                  as={FaXTwitter}
                  color="white"
                  fontSize={"24px"}
                  textAlign={"center"}
                />
              </a>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderX={"1px solid white"}
              p={"10px"}
            >
              <a href="https://www.instagram.com/18_04_salon?igsh=NHZnd2Z2dzRuZHE5&utm_source=qr">
                <Box
                  as={FaInstagram}
                  color="white"
                  fontSize={"24px"}
                  textAlign={"center"}
                />
              </a>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              borderX={"1px solid white"}
              p={"7px"}
            >
              <a href="https://www.tiktok.com/@18_04_salon?_t=8jguB80M5vK&_r=1">
                <Box
                  as={FaTiktok}
                  color="white"
                  fontSize={"24px"}
                  textAlign={"center"}
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
