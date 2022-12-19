import React from "react";
import background from "../images/royalbluewhite.svg";
import {
  Flex,
  VStack,
  Center,
  Heading,
  Input,
  Link,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
const Login = () => {
  return (
    <Center
      bgImage={background}
      width="100%"
      height="100vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        bgColor="rgba( 255, 255, 255, 0.3 )"
        alignSelf="center"
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        backdropBlur="6px"
        borderRadius="10px"
        border="1px solid rgba( 255, 255, 255, 0.18 )"
        width={["70%", "60%", "50%", "42%", "35%"]}
        px="45px"
        py="100px"
        alignItems="center"
        justifyContent="center"
        direction="column"
        position="relative"
      >
        <Link href="/">
          <ArrowBackIcon boxSize={6} position="absolute" top="4%" left="3%" />
        </Link>
        <Avatar bg="royalblue" size="lg" mb={4} />
        <Heading mb={6}>Login</Heading>
        <VStack spacing="15px">
          <Input variant="solid" width="120%" placeholder="Username" />

          <Input variant="solid" width="120%" placeholder="Password" />

          <Text fontSize={["xs", "sm"]}>
            Don't have an account?{" "}
            <Link color="royalblue" href="/register">
              Register
            </Link>
          </Text>
          <Button bgColor="parsley" color="white">
            Login
          </Button>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Login;
