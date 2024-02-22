import { Flex, Heading, Link, Text } from '@chakra-ui/react'
const Nav = () => {
    const handlescroll = () => {
        const nav = document.getElementById("nav");
        if(window.scrollY >= 40){
            nav?.classList.add('scrolled-to-top');
        }else{
            nav?.classList.remove("scrolled-to-top");
        }
    }

    window.addEventListener("scroll", handlescroll);

    const navlinks = [
      {
        name: "Home",
        path: "/",
        id: 1,
      },
      {
        name: "About",
        path: "/about",
        id: 2,
      },
      {
        name: "Services",
        path: "/services",
        id: 3,
      },
      {
        name: "Price",
        path: "/price",
        id: 4,
      },
      {
        name: "Contact",
        path: "/contact",
        id: 5,
      },
      {
        name: "Gallery",
        path: "/gallery",
        id: 6,
      },
    ];
  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"100px"}
      bgColor={"rgba(0,0,0,0.1)"}
      position={"relative"}
      py={"16px"}
      id="nav"
      transition={"all 0.3s ease"}
      zIndex={99}
    >
      <Flex>
        <Heading color={"white"} fontFamily={"Roboto"}>
          18-
          <Text as={"span"} fontFamily={"Roboto"}>
            04
          </Text>
        </Heading>
      </Flex>
      <Flex color={"white"} width={"40%"} gap={"10px"} alignItems={"center"}>
        {navlinks.map((link) => (
          <Link
            fontSize={"17px"}
            href={link.path}
            fontFamily={"Roboto"}
            fontWeight={400}
            textTransform={"uppercase"}
            px={"8px"}
            py={"8px"}
            _hover={{
              textDecoration: "none",
              color: "white",
              bg: "rgba(255, 255, 255,0.2)",
              borderRadius: "4px",
            }}
            key={link.id}
          >
            {link.name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default Nav
