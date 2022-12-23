import { db } from '../db.js';

export const getAllExports = (req,res) => {
    console.log(req)
    const userId = req.headers.uid;
    
    const q = 'SELECT id, invoicenumber, customername, customeraddress, suppliername, supplieraddress, invoicedate, currency, totalamount, totaltax, parsedate FROM records WHERE uid = ?';
    db.query(q, [userId], (err, results)=>{
        if (err) return res.status(500).json(err);
        const responseObj = {
            result: results,
            count: results.length
          }
          
          return res.status(200).json(responseObj);
    })
}

export const updateAllExports = (req,res) => {}

export const insertAllExports = (req,res) => {}

export const removeFromAllExports = (req,res) => {}
