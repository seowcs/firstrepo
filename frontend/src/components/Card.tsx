import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { TbFileInvoice } from "react-icons/tb";

const InvCard = () => {
  return (
    <>
      <Card bgColor="white" variant="elevated">
        <CardHeader>
          <Flex justify="space-between" align="center">
            <Heading size="md">Invoice1</Heading>

            <TbFileInvoice fontSize="28px" />
          </Flex>
        </CardHeader>

        <CardBody pt="0">
          <VStack align="flex-start" justify="flex-start" spacing={2}>
            <Text>
              <Text as="b">Invoice No:</Text> 1
            </Text>
            <Text>
              <Text as="b">Date:</Text> 28/10/2003
            </Text>
            <Text>
              <Text as="b">Supplier Name:</Text> SAF
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default InvCard;
