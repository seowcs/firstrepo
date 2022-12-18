import { Button, Divider, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { RiPlantFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <Flex
      zIndex="2"
      as="nav"
      justify="space-between"
      align="center"
      width="95%"
      bgColor="rgba( 255, 255, 255, 0.3 )"
      alignSelf="center"
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropBlur="6px"
      borderRadius="10px"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      mt="20px"
      py="3"
      px="5"
    >
      <Link href="/">
        <RiPlantFill size="28px" color="#5a9f4d" />
      </Link>

      <HStack spacing="20px" className="nav-items">
        <Link href="/register" _hover={{ color: "royalblue" }}>
          <Text fontWeight="500">Register</Text>
        </Link>
        <Divider orientation="vertical" />
        <Link href="/login">
          <Button variant="solid" bgColor="parsley" color="white">
            {" "}
            <Text>Login</Text>
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
