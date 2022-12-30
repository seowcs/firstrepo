import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import background from "../images/royalbluewhite.svg";
import { Box, Button, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {  ColumnDirective, ColumnsDirective,GridComponent, ToolbarItems } from "@syncfusion/ej2-react-grids";
import { ExcelExport, Edit, Inject, Toolbar, Grid } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import { useAppSelector } from "../app/hooks";

const All = () => {
    const userId = useAppSelector((state)=> state.authSlice.data.id)

    const baseURL: string = 'http://localhost:8800/exports'
  const data: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    updateUrl: baseURL + '/update',
    removeUrl: baseURL + '/remove',
    url: baseURL,
    headers:[{uid: userId}]
  })

  let grid: Grid | null;
  
  const toolbar: ToolbarItems[] = [ 'Edit', 'Cancel','Update', 'Delete',  'ExcelExport'];
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

  const dataSourceChanged=(state: any)=> {
    console.log(state);
}
  
    return (
        <Flex
        bgImage={background}
      width="100%"
      minHeight='100vh'
      
      direction="column"
      bgSize="cover"
      position="relative"
      pb={8}>
            <Navbar />

            <Flex
        className="textbox"
        px="100px"
        mt="30px"
        
        height='80%'
        direction="column"
        align="center"
      >
         <GridComponent dataSource={data} dataSourceChanged={dataSourceChanged} allowExcelExport={true}
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
        
        </Flex>
        <Link to="/records">
            <Button
              zIndex="1"
              bgColor="royalblue"
              variant="solid"
              color="white"
              mt={8}
            >
              Back to Records
            </Button>
          </Link>
        </Flex>
    
    )
     
    
}

export default All