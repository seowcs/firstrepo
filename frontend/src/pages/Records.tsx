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
  Select,
  Box
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {useEffect, useState, useMemo} from "react";
import Navbar from "../components/Navbar";
import background from "../images/royalbluewhite.svg";
import { TbFileInvoice } from "react-icons/tb";
import InvCard from "../components/InvCard";
import axios from "axios";
import { useAppSelector } from "../app/hooks";

interface CardData {
  id: number;
  invoicenumber: string;
  parsedate: string;
  suppliername: string;

}

const Records = () => {
  const isLoggedIn = useAppSelector((state)=> state.authSlice.isLoggedIn)
  const [records, setRecords] = useState<CardData[] | never[]>([])
  const [choice, setChoice] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)
  const lastRecordIndex = currentPage * postsPerPage
  const firstRecordIndex = lastRecordIndex - postsPerPage
  const [error, setError] = useState<string|null>(null)





  const [searchTerm, setSearchTerm] = useState<string>('')
  const [unfilteredData, setUnfilteredData] = useState<CardData[] | never[]>([])

  const fetchData = async ()=> {
    try {
      const res = await axios.get('/records');
      setUnfilteredData(res.data);
    }
    catch(err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message);
      } else {
        console.log('Unexpected error', err);
      }
          }
  }

  useEffect(() => {
    
    setTimeout(fetchData,500)

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

  const currentRecords = records.slice(firstRecordIndex, lastRecordIndex)
  

  const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=> {   
    setChoice(e.target.value)
    }
  
    let pages = []
    for(let i=1; i<=Math.ceil(records.length/postsPerPage) ; i++) {
      pages.push(i)
    }
  return (
    <div>
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgImage={background}
        minHeight="100vh"
        width='100%'
        pb={5}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
      >
        <Navbar />
        {/* {error && <Heading mt={5}>{error}</Heading>} */}
        
          <>
          <Flex width="90%" justify="space-between" align="center" >
          <Heading alignSelf="flex-start" m="20px 0 30px">
            Your <span style={{ color: "#5a9f4d" }}>Records</span>
          </Heading>

          <HStack width='60%'>
          <InputGroup pr="4px" width="75%" size="md">
          <InputLeftElement width="40px" >
              <SearchIcon h='2rem'/>
            </InputLeftElement>
            <Input variant="solid"  placeholder="Search by..." onChange={(e)=> setSearchTerm(e.target.value)} />

          </InputGroup>

          
          <Select  placeholder='All' width='25%'  onChange={handleChange}>
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

        

        
        <SimpleGrid minChildWidth="200px"  maxWidth="90%" spacing="40px" alignItems='flex-start' mb={5}>
          {currentRecords.map((record, index) => (
      
            
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
        
        <HStack>
        {pages.map((page,index)=>{
          return(
            <Button key={index} _active={{bgColor:'royalblue'}} className={page==currentPage ? 'active' : ''}  onClick={()=>setCurrentPage(page)}>{page}</Button>
          )
            
        })}
        </HStack>
        </>
        

        </Flex>
        
      
    </div>
  );
};

export default Records;
