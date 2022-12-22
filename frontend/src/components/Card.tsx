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
  Box,
  IconButton
} from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'


interface CardProps {
  id: number;
  invNumber:string;
  time: string;
  supplierName: string;
}


const InvCard = ({id, invNumber, time, supplierName}: CardProps) => {
  return (
    <>
      <Card bgColor="white" variant="elevated" _hover={{boxShadow:'2xl'}}>
        <CardHeader>
          <Flex justify="space-between" align="center">
            <Heading size="md">Invoice {id}</Heading>

            <IconButton colorScheme='red' size='xs' fontSize='10px' 
 aria-label='Delete Record' icon={<CloseIcon />} />
          </Flex>
        </CardHeader>

        <CardBody pt="0">
          <VStack align="flex-start" justify="flex-start" spacing={2} wrap='wrap' textAlign='left'>
            
            <Text>
              <Text as="b">Invoice No:</Text> {invNumber}
            </Text>

            <Box >
            <Text >
              <Text as="b">Time:</Text> {time}
            </Text>
            </Box>
            
            <Text>
              <Text as="b">Supplier Name:</Text> {supplierName}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default InvCard;
