
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
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useAppDispatch();
  const newState = useAppSelector((state) => state.authSlice)
  const navigate = useNavigate();
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
  const [error, setError] = useState<string| null>(null)

  console.log(newState)


  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
    
   }

  const handleSubmit = async (e: any) => {
      if (userInfo.username === "") {
        setError("Username is required")
      }

      else if (userInfo.password === "") {
        setError("Password is required")
       
      }

      else {e.preventDefault();
      const promise = await dispatch(login(userInfo))
      console.log('promise:',promise)
      if (promise.payload?.response) {
        const errorMsg = promise.payload?.response
        console.log(errorMsg.data, errorMsg.status)
      }
      else navigate('/records')}
      
    }

    

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

          {error && <Text color='red' fontSize={["xs", "sm"]}>{error}</Text>}

          <Button onClick={handleSubmit} bgColor="parsley" color="white">
            Login
          </Button>
          
        </VStack>
      </Flex>
    </Center>
  );
};

export default Login;
