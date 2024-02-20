import React from 'react'
import { Flex, Box, Collapse, useDisclosure, Text, Heading, Button, Link } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";
import Colors from '../constants/colors';
const MobileNav = () => {
    const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bgColor={"#1d2434"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"20px"}
        py={"8px"}
      >
        <Heading color={"white"}>
          Barber{" "}
          <Text as={"span"} fontWeight={900}>
            X
          </Text>
        </Heading>
        <Button
          onClick={onToggle}
          color={"white"}
          fontSize={"30px"}
          variant={Colors.purple}
          border={"1px solid white"}
          _hover={{
            border: "1px solid white",
            outline: "none !important",
          }}
          _focus={{
            border: "1px solid white",
            outline: "none !important",
          }}
          _focusVisible={{
            border: "1px solid white",
            outline: "none !important",
          }}
        >
          <IoMenu />
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box p="20px" mt="4" color={"white"}>
          <Flex flexDirection={"column"} gap={"10px"}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/services'>Services</Link>
            <Link href='/price'>Price</Link>
            <Link href='/contact'>Contact</Link>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}

export default MobileNav
