
import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { userData } from '../features/info/authSlice'
import { login, logout} from '../features/info/authSlice'
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
import { ChangeEvent, useEffect, useState } from "react";
const Login = () => {
  const dispatch = useAppDispatch();
  const newState = useAppSelector((state) => state.authSlice)
  const user = localStorage.getItem('user') !== null  ? JSON.parse(localStorage.user) : {
    loading: false,
    error: "",
    isLoggedIn: false,
    data: {
        username: "",
        email: ""
    }
}
  const [userInfo, setUserInfo] = useState({
    username:'',
    password:''
  })
  console.log(user)


  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
    
   }

  const handleSubmit = (e: any) => {
      e.preventDefault();
      dispatch(login(userInfo))
      
    }

    useEffect(() => {
      console.log()
    
      
    }, [localStorage])
    

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
          <Input variant="solid" width="120%" placeholder="Username" name="username" onChange={handleChange} />

          <Input variant="solid" width="120%" placeholder="Password" name="password" onChange={handleChange}/>

          <Text fontSize={["xs", "sm"]}>
            Don't have an account?{" "}
            <Link color="royalblue" href="/register">
              Register
            </Link>
          </Text>
          <Button onClick={handleSubmit} bgColor="parsley" color="white">
            Login
          </Button>
          <Text onClick={()=> {dispatch(logout())}}>Logout</Text>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Login;
