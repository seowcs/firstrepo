import { Box, Button, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import background from "../images/royalbluewhite.svg";
import image from "../images/wave.png";

const Single = () => {
  const invoiceObj = {
    invoiceNumber: "2022-07-001",
    customerName: "YUEN SIK WENG",
    customerAddress: "11 Upper Boon Keng Road #16-919 Singapore 380011",
    supplierName: "LIAN SOON CONSTRUCTION PTE LTD",
    supplierAddress:
      "21A Senoko Loop, Lian Soon Industrial Building Singapore 758174",
    invoiceDate: "2022-07-04",
    currency: "SGD",
    totalAmount: 1500,
    totalNet: 1500,
    totalTax: 0,
  };
  // const info = useContext(invContext)?.info
  // const handleClick = useContext(invContext)?.handleClick
  return (
    <Flex
      bgImage={background}
      width="100%"
      height="100vh"
      direction="column"
      bgSize="cover"
      position="relative"
    >
      <Navbar />

      <Flex
        className="textbox"
        px="100px"
        mt="20px"
        mb="10px"
        direction="column"
        align="center"
        justify="flex-start"
      >
        {/* <h1>Results:</h1>
          <p>Invoice Number: {newState?.data?.invoiceNumber}</p>
          <p>Customer Name: {newState.data?.customerName}</p>
          <p>Customer Address: {newState.data?.customerAddress}</p>
          <p>Supplier Name: {newState.data?.supplierName}</p>
          <p>Supplier Address: {newState.data?.supplierAddress}</p>
          <p>Invoice Date: {newState.data?.invoiceDate}</p>
          <p>Currency: {newState.data?.currency}</p>
          <p>Total Amount: {newState.data?.totalAmount}</p>
          <p>Net Total Amount: {newState.data?.totalNet}</p>
          <p>Total Tax Amount: {newState.data?.totalTax}</p> */}
        <Heading size="xl" mb={3}>
          Invoice1
        </Heading>
        <p>Invoice Number: {invoiceObj.invoiceNumber}</p>
        <p>Customer Name: {invoiceObj.customerName}</p>
        <p>Customer Address: {invoiceObj.customerAddress}</p>
        <p>Supplier Name: {invoiceObj.supplierName}</p>
        <p>Supplier Address: {invoiceObj.supplierAddress}</p>
        <p>Invoice Date: {invoiceObj.invoiceDate}</p>
        <p>Currency: {invoiceObj.currency}</p>
        <p>Total Amount: {invoiceObj.totalAmount}</p>
        <p>Net Total Amount: {invoiceObj.totalNet}</p>
        <p>Total Tax Amount: {invoiceObj.totalTax}</p>
        <HStack
          spacing="300px"
          maxWidth="100%"
          alignSelf="center"
          justify="space-between"
        >
          <Link to="/records">
            <Button
              zIndex="1"
              bgColor="royalblue"
              variant="solid"
              color="white"
              mt={3}
            >
              Back to Records
            </Button>
          </Link>
        </HStack>
      </Flex>

      <Box width="100%" position="absolute" bottom="0" height="200px">
        <Image
          position="absolute"
          bottom="0"
          width="100%"
          src={image}
          alt=""
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default Single;
