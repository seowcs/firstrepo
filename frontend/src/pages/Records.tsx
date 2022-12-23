import {
  Flex,
  Heading,
  SimpleGrid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Button,
  Link,
  Select
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {useEffect, useState, useMemo} from "react";
import Navbar from "../components/Navbar";
import background from "../images/royalbluewhite.svg";
import { TbFileInvoice } from "react-icons/tb";
import InvCard from "../components/InvCard";
import axios from "axios";

interface CardData {
  id: number;
  invoicenumber: string;
  parsedate: string;
  suppliername: string;

}

const Records = () => {

  const [records, setRecords] = useState<CardData[] | never[]>([])
  const [choice, setChoice] = useState<string>('')

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [unfilteredData, setUnfilteredData] = useState<CardData[] | never[]>([])
  console.log(choice)
  console.log(unfilteredData)
  const fetchData = async ()=> {
    try {
      const res = await axios.get('/records');
      console.log(res.data);
      setUnfilteredData(res.data);
    }
    catch(err) {
            console.log(err);
          }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  useEffect(() => {
    const filteredData:any = unfilteredData.filter((card: CardData)=> {
    if (choice=='id') { return card.id.toString().toLowerCase().includes(searchTerm.toLowerCase())}
    else if (choice=='suppliername') {return card.suppliername.toLowerCase().includes(searchTerm.toLowerCase())}
    else if (choice=='parsedate') {return card.parsedate.toLowerCase().includes(searchTerm.toLowerCase())}
    else if (choice=='invoicenumber') {return card.invoicenumber.toLowerCase().includes(searchTerm.toLowerCase())}
    else {return card}
    })

    setRecords(filteredData)
  
  }, [searchTerm, unfilteredData, choice])

  const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=> {   
    setChoice(e.target.value)
    }
  
  

  return (
    <div>
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgImage={background}
        width="100%"
        height="120vh"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
      >
        <Navbar />
        <Flex width="90%" justify="space-between" align="center">
          <Heading alignSelf="flex-start" m="20px 0 30px">
            Your <span style={{ color: "#5a9f4d" }}>Records</span>
          </Heading>

          <HStack width='60%'>
          <InputGroup pr="4px" width="80%" size="md">
          <InputLeftElement width="40px" >
              <SearchIcon h='2rem'/>
            </InputLeftElement>
            <Input variant="solid"  placeholder="Search by..." onChange={(e)=> setSearchTerm(e.target.value)} />

          </InputGroup>

          <Select border='2px solid black' placeholder='Choice' width='20%'  onChange={handleChange}>
          <option value='id'>ID</option>
          <option value='invoicenumber'>Invoice No.</option>
           <option value='parsedate'>Date of Parsing</option>
           <option value='suppliername'>Supplier Name</option>
          </Select>
          </HStack>
          
          <Link href="/records/all">
          <Button bgColor="royalblue" color="white">
            Export All
          </Button>
          </Link>
          
        </Flex>

        <SimpleGrid minChildWidth="200px"  width="90%" spacing="40px" alignItems='flex-start'>
          {records.map((record, index) => (
      
            
            <InvCard handleClick={ async () => {
              try{
               const response = await axios.delete(`/records/${record.id}`);
               console.log(response.data);
               fetchData();
              }
              catch(err){
               console.log(err);
              }
             }} href={`/records/${record.id}`} key={record.id} id={record.id} invNumber={record.invoicenumber} time={record.parsedate} supplierName={record.suppliername} />

          ))}
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default Records;
