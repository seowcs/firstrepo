import React, { ChangeEvent, useState } from "react";
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
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowBackIcon, WarningIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [input, setInput] = useState({
    username: null,
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  const [samePassword, setSamePassword] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", input);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(samePassword);

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
        direction="column"
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
        position="relative"
      >
        <Link href="/">
          <ArrowBackIcon boxSize={6} position="absolute" top="4%" left="3%" />
        </Link>
        <Heading mb={6}>Register</Heading>
        <VStack spacing="15px">
          <Input
            variant="solid"
            minWidth="120%"
            onChange={handleChange}
            placeholder="Username"
            name="username"
          />
          <Input
            variant="solid"
            width="120%"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
          />
          <Input
            type="password"
            variant="solid"
            width="120%"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />

          <InputGroup width="120%">
            <Input
              type="password"
              variant="solid"
              onChange={(e) => {
                e.target.value == input.password
                  ? setSamePassword(true)
                  : setSamePassword(false);
              }}
              placeholder="Confirm Password"
            />
            {!samePassword && (
              <Tooltip label="Passwords do not match!">
                <InputRightElement children={<WarningIcon color="red.500" />} />
              </Tooltip>
            )}
          </InputGroup>

          <Text fontSize={["xs", "sm"]}>
            Already have an account?{" "}
            <Link color="royalblue" href="/login">
              Log in
            </Link>
          </Text>
          <Button
            isDisabled={samePassword ? false : true}
            bgColor="parsley"
            color="white"
            onClick={handleClick}
          >
            Create Account
          </Button>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Register;
