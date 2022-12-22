import express from 'express';
import { getData, updateData } from '../controllers/parse.js';
import multer from "multer";
import * as mindee from "mindee";
import fs from "fs";
import { Blob } from "buffer";
import { db } from '../db.js';
import moment from "moment";

const router = express.Router();
const parseDate =  moment().format('MMMM Do YYYY, h:mm:ss a')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
const upload = multer({ storage })

const mindeeClient = new mindee.Client({apiKey:"6606579fbe76a733f811d96b84725364"})


router.post('/',  upload.single('file'), (req,res)=>{
    const file = req.file;
    const uid = req.body.uid;
    const parseDate = req.body.time
  
    console.log(req.body)
    
    const parseInvoice = async () => {
        try {
            
            const doc = mindeeClient.docFromPath(`C:/Users/Admin/Desktop/invoiceapp/backend/uploads/${file.filename}`);
            const resp = await doc.parse(mindee.InvoiceV4);
    
            
            const invoiceNumber = resp.document.invoiceNumber?.value;
            const customerName = resp.document.customerName?.value;
            const customerAddress = resp.document.customerAddress?.value;
            const supplierName = resp.document.supplierName?.value
            const supplierAddress = resp.document.supplierAddress?.value
            const invoiceDate = resp.document.date?.value;
            const currency = resp.document.locale?.currency;
            const totalAmount= resp.document.totalAmount?.value; 
            const totalTax = resp.document.totalTax?.value;
            const fileURL = `C:/Users/Admin/Desktop/invoiceapp/backend/uploads/${file.filename}`
            
    
            console.log(uid, parseDate);

            const q = ' INSERT INTO records (invoicenumber, customername, customeraddress, suppliername, supplieraddress, invoicedate, currency, totalamount, totaltax, fileurl, parsedate, uid ) VALUES (?)'
            const values = [invoiceNumber, customerName, customerAddress, supplierName, supplierAddress, invoiceDate, currency, totalAmount, totalTax, fileURL, parseDate,uid ]

            let buffer = fs.readFileSync(`C:/Users/Admin/Desktop/invoiceapp/backend/uploads/${file.filename}`);
    
            const b64 = buffer.toString('base64')
            

            const data = {
              invoiceNumber: invoiceNumber,
              customerName: customerName,
              customerAddress: customerAddress,
              supplierName: supplierName,
              supplierAddress: supplierAddress,
              invoiceDate: invoiceDate,
              currency: currency,
              totalAmount: totalAmount,
              totalTax: totalTax,
              fileURL: b64 
              };

            

            db.query(q, [values], (err, results) => {
              if (err) return res.status(500).json(err);
              return res.status(200).json(data);
            }
            )

            

           
    
        } catch (error) {
            console.log('line82:',error);
        }
        
    }
    
     parseInvoice();
})

router.post('/data', getData)
router.post('/data/update', updateData)



export default router;