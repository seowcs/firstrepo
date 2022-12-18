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
      <VStack
        bgColor="rgba( 255, 255, 255, 0.3 )"
        alignSelf="center"
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        backdropBlur="6px"
        borderRadius="10px"
        border="1px solid rgba( 255, 255, 255, 0.18 )"
        width={["70%", "60%", "50%", "42%", "35%"]}
        px="45px"
        py="60px"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Avatar bg="royalblue" size="lg" />
        <Heading mb="30px">Login</Heading>
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
      </VStack>
    </Center>
  );
};

export default Login;
