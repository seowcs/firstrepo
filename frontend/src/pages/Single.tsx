import { Box, Button, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import background from "../images/royalbluewhite.svg";
import image from "../images/wave.png";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {  ColumnDirective, ColumnsDirective,GridComponent, ToolbarItems } from "@syncfusion/ej2-react-grids";
import { ExcelExport, Edit, Inject, Toolbar, Grid } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from "axios";


const Single = () => {
  const [backURL, setBackURL] = useState<string>('')

  const userId = useAppSelector((state)=> state.authSlice.data.id)
  const location = useLocation();

  const postId = location.pathname.split('/')[2];;

  const baseURL: string = `http://localhost:8800/records/${postId}`;

  const data: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    updateUrl: baseURL + '/update',
    url: baseURL,
    headers:[{uid: userId}]
  })


    
  let grid: Grid | null;
  
  const toolbar: ToolbarItems[] = [ 'Edit', 'Update', 'Cancel', 'ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {  
      if (grid && args.item.id?.includes('excelexport')){
        grid.showSpinner();
        grid.excelExport();
      }
  };
  const excelExportComplete = () => {
    if (grid) {
        grid.hideSpinner();
    }
  };

  useEffect(() => {
    const fetchPdfB64 = async () => {
      try {
        const response = await axios.get(`/records/${postId}/pdf`)
        console.log(response.data)
        setBackURL(response.data)
      } catch (error) {
        console.log(error);
        
      }
      
    }
    fetchPdfB64()
 
  }, [])

  const frontURL = 'data:application/pdf;base64,'
  const newURL = frontURL.concat(backURL)
  console.log(newURL)

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Flex
      bgImage={background}
      width="100%"
      minHeight='100vh'
      direction="column"
      bgSize="cover"
      position="relative"
    >
      <Navbar />

      <Flex
        className="textbox"
        px="100px"
        mt="20px"
        
        direction="column"
        align="center"
        justify="flex-start"
      >
        <GridComponent dataSource={data}  allowExcelExport={true}
       editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
      toolbar={ toolbar} toolbarClick={toolbarClick} ref={g=> grid = g} 
      excelExportComplete={excelExportComplete}>
      <ColumnsDirective>
      <ColumnDirective field='id' headerText="ID" allowEditing= {false} />
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
    <Inject services={[Edit, Toolbar, ExcelExport]} />
        </GridComponent>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
          <Box style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '80%',
          width: '70%',
          
      }} mt={10}>
        
          <Viewer fileUrl={ newURL} plugins={[defaultLayoutPluginInstance]} />
          </Box>
        
        </Worker> 
        
       

          <Link to="/records">
            <Button
              zIndex="1"
              bgColor="royalblue"
              variant="solid"
              color="white"
              my={8}
            >
              Back to Records
            </Button>
          </Link>
        
      </Flex>

    </Flex>
  );
};

export default Single;
