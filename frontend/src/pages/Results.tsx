import React, {useContext} from 'react'
import { invContext } from '../invContext'
import {Link} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { parseInvoice, handleClick } from '../features/info/infoSlice'
type Props = {}

const Results = (props: Props) => {

  const dispatch = useAppDispatch();
  const newState = useAppSelector(state=>state)
  console.log(newState)

//   const invoiceObj= {
//     invoiceNumber: "2022-07-001",
//     customerName: "YUEN SIK WENG",
//     customerAddress: "11 Upper Boon Keng Road #16-919 Singapore 380011",
//     supplierName: "LIAN SOON CONSTRUCTION PTE LTD",
//     supplierAddress: "21A Senoko Loop, Lian Soon Industrial Building Singapore 758174",
//     invoiceDate: "2022-07-04",
//     currency: "SGD",
//     totalAmount: 1500,
//     totalNet: 1500,
//     totalTax: 0
// }
  // const info = useContext(invContext)?.info
  // const handleClick = useContext(invContext)?.handleClick
  return (
    <div>
      <h1>Results:</h1>
      <p>Invoice Number: {newState?.data?.invoiceNumber}</p>
      <p>Customer Name: {newState.data?.customerName}</p>
      <p>Customer Address: {newState.data?.customerAddress}</p>
      <p>Supplier Name: {newState.data?.supplierName}</p>
      <p>Supplier Address: {newState.data?.supplierAddress}</p>
      <p>Invoice Date: {newState.data?.invoiceDate}</p>
      <p>Currency: {newState.data?.currency}</p>
      <p>Total Amount: {newState.data?.totalAmount}</p>
      <p>Net Total Amount: {newState.data?.totalNet}</p>
      <p>Total Tax Amount: {newState.data?.totalTax}</p>
      {/* <h1>Results:</h1>
      <p>Invoice Number: {invoiceObj.invoiceNumber}</p>
      <p>Customer Name: {invoiceObj.customerName}</p>
      <p>Customer Address: {invoiceObj.customerAddress}</p>
      <p>Supplier Name: {invoiceObj.supplierName}</p>
      <p>Supplier Address: {invoiceObj.supplierAddress}</p>
      <p>Invoice Date: {invoiceObj.invoiceDate}</p>
      <p>Currency: {invoiceObj.currency}</p>
      <p>Total Amount: {invoiceObj.totalAmount}</p>
      <p>Net Total Amount: {invoiceObj.totalNet}</p>
      <p>Total Tax Amount: {invoiceObj.totalTax}</p> */}

      <Link to='/'><button onClick={()=> dispatch(handleClick())}>Parse Another Invoice</button></Link>
      
    </div>
  )
}

export default Results