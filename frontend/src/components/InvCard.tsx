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
  IconButton,
  Link
} from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'

interface CardProps {
  id: number;
  invNumber:string;
  time: string;
  supplierName: string;
  href: string;
  handleClick: () => Promise<void>;
}


const InvCard = ({id, invNumber, time, supplierName, href, handleClick}: CardProps) => {

  return (
    <>
      <Card maxWidth={['400px',null, '300px','250px']} bgColor="white" variant="elevated" _hover={{boxShadow:'2xl'}}>
        
        <CardHeader>
          <Flex justify="space-between" align="center">
            <Heading size="md">Invoice {id}</Heading>

            <IconButton onClick={handleClick} colorScheme='red' size='xs' fontSize='10px' 
 aria-label='Delete Record' icon={<CloseIcon />} />
          </Flex>
        </CardHeader>
        <Link href={href} width='100%' _hover={{textDecoration:'none'}} >
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
        </Link>
      </Card>
    </>
  );
};

export default InvCard;
