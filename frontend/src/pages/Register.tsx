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
} from "@chakra-ui/react";
const Register = () => {
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
      >
        <Heading mb="15px">Register</Heading>
        <VStack spacing="15px">
          <Input variant="solid" minWidth="120%" placeholder="Username" />
          <Input variant="solid" width="120%" placeholder="Email Address" />
          <Input variant="solid" width="120%" placeholder="Password" />
          <Input variant="solid" width="120%" placeholder="Confirm Password" />
          <Text fontSize={["xs", "sm"]}>
            Already have an account?{" "}
            <Link color="royalblue" href="/login">
              Log in
            </Link>
          </Text>
          <Button bgColor="parsley" color="white">
            Create Account
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
};

export default Register;
