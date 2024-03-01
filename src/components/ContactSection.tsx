import { Box, Button, Flex,  Input, Stack, Textarea } from '@chakra-ui/react';
import Image3 from "../assets/Images/about.jpg";
import {   useState } from "react";
import emailjs from "@emailjs/browser";
 import { toast } from "react-toastify";
// type Timeout = ReturnType<typeof setTimeout>;



const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState('');


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      const serviceId = "service_2fk96r4";
      const templateId = "template_li66gbl";
      const publicKey = "3oeULxCaRc6LiSFmJ";


      const templateParams = {
          from_name: name,
          from_email: email,
          subject: message,
          to_name: "18-04",
          message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            console.log('Email sent successfully', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            toast.success("Email sent successfully", {
              autoClose: 4000,
              hideProgressBar: true,
              theme: "light",
            });
          })
          .catch((error) => {
            console.log('Error sending email', error);
            toast.error("Error sending email", {
              autoClose: 5000,
              hideProgressBar: true,
              theme: "light",
            });
          });
      }
  return (
    <>
      <section>
        <Flex
          bg={"white"}
          w={"full"}
          flexDir={{ lg: "row", base: "column" }}
          h={{ lg: "80vh", base: "100%" }}
          my={{ lg: "100px", base: "50px" }}
        >
          <Flex
            w={"40%"}
            h={"100%"}
            mx={0}
            bgImage={`url('${Image3}')`}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            display={{ lg: "flex", base: "none" }}
          ></Flex>
          <Box bg={"#1d2434"} w={{ lg: "60%", base: "100%" }}>
            <Stack
              pt={"50px"}
              pb={"20px"}
              pr={{ lg: "90px", base: "20px" }}
              pl={{ lg: "90px", base: "20px" }}
              pos={"relative"}
            >
              <Flex flexDirection={"column"} gap={"40px"}>
                <Input
                  placeholder={"Your Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontFamily={"Roboto"}
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Input
                  placeholder={"Your Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  fontFamily={"Roboto"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Input
                  placeholder={"Subject"}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontSize={"18px"}
                  fontFamily={"Roboto"}
                  fontStyle={"normal"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Textarea
                  placeholder={"Message"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  bg={"none"}
                  border={"none"}
                  borderBottom={"1px solid #D5B981"}
                  fontWeight={"400px"}
                  fontSize={"18px"}
                  fontFamily={"Roboto"}
                  color={"grey"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  borderRadius={"0px"}
                  size="sm"
                  _hover={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focus={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #D5B981",
                    outline: "none !important",
                  }}
                />
                <Button
                  bg={"#1d2434"}
                  color={"#D5B981"}
                  border={"1px solid #D5B981"}
                  w={"130px"}
                  h={"50px"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                  fontSize={"18px"}
                  outline={"none"}
                  transition={".3s ease-out"}
                  _hover={{
                    border: "1px solid #D5B981",
                    color: "#1d2434",
                    background: "#D5B981",
                  }}
                  _focus={{
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    outline: "none !important",
                  }}
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </section>
    </>
  );
}

export default ContactSection
