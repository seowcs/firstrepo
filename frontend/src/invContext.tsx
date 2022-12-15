
import axios from "axios";
import React, { createContext, useState } from "react";

interface invContextValue {
  info: invoiceData | null;
  parseInvoice(data: FormData): void
  handleClick():  void;
}

export const invContext = createContext<invContextValue| null>(null);

interface Props {
  children: React.ReactNode;
}

interface invoiceData {
  invoiceNumber: number | undefined | null,
  customerName: string | undefined | null,
  customerAddress: string | undefined | null,
  supplierName: string | undefined | null,
  supplierAddress: string | undefined | null,
  invoiceDate: number | undefined | null,
  currency: string | undefined | null,
  totalAmount: number | undefined | null,
  totalNet: number | undefined | null,
  totalTax: number | undefined | null
}


export const InvProvider: React.FC<Props>= ({children}) => {

  const [info, setInfo] = useState<invoiceData | null>(null)
    

  const handleClick = () =>{
    setInfo(null)
  }

  
  const parseInvoice = async (data: FormData) => {
       try {
      await axios
          .post('http://localhost:8800/parse', data)
          .then(res =>{
            console.
            log(res.data)
            setInfo(res.data)
          })
          .catch(err=>console.log(err));

   } catch (error) {
     console.log(error);
  }




  }


    return (
        <invContext.Provider value={{info, parseInvoice, handleClick}} >
          {children}
        </invContext.Provider>)
}