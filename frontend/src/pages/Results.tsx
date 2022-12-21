import { Box, Button, Flex, Image, Spinner } from "@chakra-ui/react";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Navbar from "../components/Navbar";
import { parseInvoice, handleClick } from "../features/info/infoSlice";
import background from "../images/royalbluewhite.svg";
import image from "../images/wave.png";
import {  ColumnDirective, ColumnsDirective,GridComponent } from "@syncfusion/ej2-react-grids";
import { Edit, Inject, Toolbar,  } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {};

const Results = (props: Props) => {
  const [pdfDataURL, setPdfDataURL] = useState<any>(null)
  const dispatch = useAppDispatch();
  const newState = useAppSelector((state) => state.infoSlice);
  console.log(newState);
  const { file, ...tableData} = newState.data
  
  const baseURL: string = 'http://localhost:8800/parse'
  const data: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    updateUrl: baseURL + '/data/update',
    url: baseURL + '/data'
  })

  let reader = new FileReader();
  if(file) {
    reader.readAsDataURL(file);
    reader.onloadend=(e)=> {
    const dataURL = e.target?.result
    setPdfDataURL(dataURL)
    }
  }

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
  

  const invoiceObj = [
    {
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
      totalTax: 0
    },
  ];

  const dataSourceChanged=(state: any)=> {
      console.log(state);
  }

   
  const backURL = newState?.data?.fileURL.slice(0); 
  const frontURL = 'data:application/pdf;base64,'
  const newURL = frontURL.concat(backURL)

  return (
    <Flex
      bgImage={background}
      width="100%"
      height="180vh"
      direction="column"
      bgSize="cover"
      position="relative"
    >
      <Navbar />

      <Flex
        className="textbox"
        px="100px"
        mt="30px"
        mb="20px"
        height='80%'
        direction="column"
        align="center"
      >


       {(newState?.loading) && <Spinner thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='royalblue'
  size='xl'/>}  

      { (!newState?.loading) && (newState.data?.file) &&
      <GridComponent dataSource={data} dataSourceChanged={dataSourceChanged} editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
      toolbar={ [ 'Edit', 'Update', 'Cancel']} >
      <ColumnsDirective>
        <ColumnDirective field='invoicenumber' headerText="Invoice Number"/>
        <ColumnDirective field='customername' headerText="Customer Name"/>
        <ColumnDirective field='customeraddress' headerText="Customer Address"/>
        <ColumnDirective field='suppliername' headerText="Supplier Name"/>
        <ColumnDirective field='supplieraddress' headerText="Supplier Address"/>
        <ColumnDirective field='invoicedate' headerText="Invoice Date"/>
        <ColumnDirective field='currency' headerText="Currency"/>
        <ColumnDirective field='totalamount' headerText="Total Amount"/>
        
        <ColumnDirective field='totaltax' headerText="Tax Amount"/>
        
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
        </GridComponent> }
      
      
        {(!newState?.loading) && (newState.data?.file) &&
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
          <Box style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '80%',
          width: '70%',
          
      }} my={10}>
        
          <Viewer fileUrl={ newURL || pdfDataURL} plugins={[defaultLayoutPluginInstance]} />
          </Box>
        
        </Worker> 
      }
      

          <Link to="/">
            <Button
            mt={5}
              zIndex="1"
              bgColor="parsley"
              variant="solid"
              
              color="white"
              onClick={() => dispatch(handleClick())}
            >
              Parse Another Invoice
            </Button>
          </Link>
        
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

export default Results;
