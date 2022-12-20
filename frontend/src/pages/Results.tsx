import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Navbar from "../components/Navbar";
import { parseInvoice, handleClick } from "../features/info/infoSlice";
import background from "../images/royalbluewhite.svg";
import image from "../images/wave.png";
import {  ColumnDirective, ColumnsDirective,dataSourceChanged,GridComponent } from "@syncfusion/ej2-react-grids";
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {};

const Results = (props: Props) => {
  const [pdfDataURL, setPdfDataURL] = useState<any>(null)
  const dispatch = useAppDispatch();
  const newState = useAppSelector((state) => state);
  console.log(newState);
  const { file, ...tableData} = newState.data
  


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
  console.log(newURL)

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


          <GridComponent dataSource={[tableData]} dataSourceChanged={dataSourceChanged} editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
          toolbar={ ['Add', 'Edit', 'Delete', 'Update', 'Cancel']} >
          <ColumnsDirective>
            <ColumnDirective field='invoiceNumber' headerText="Invoice Number"/>
            <ColumnDirective field='customerName' headerText="Customer Name"/>
            <ColumnDirective field='customerAddress' headerText="Customer Address"/>
            <ColumnDirective field='supplierName' headerText="Supplier Name"/>
            <ColumnDirective field='supplierAddress' headerText="Supplier Address"/>
            <ColumnDirective field='invoiceDate' headerText="Invoice Date"/>
            <ColumnDirective field='currency' headerText="Currency"/>
            <ColumnDirective field='totalAmount' headerText="Total Amount"/>
            {/* <ColumnDirective field='totalNet ' headerText="Net Total"/> */}
            <ColumnDirective field='totalTax' headerText="Tax Amount"/>
            
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
            </GridComponent> 
          {/* datasource only accepts arrays */}

      {(!newState?.loading) && <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <Box style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '80%',
        width: '70%',
        
    }} my={10}>
      
        <Viewer fileUrl={ newURL || pdfDataURL} plugins={[defaultLayoutPluginInstance]} />
        </Box>
      
      </Worker>}
      




          <Link to="/">
            <Button
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
