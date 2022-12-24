import { db } from '../db.js';

export const getAllExports = (req,res) => {
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

export const updateAllExports = (req,res) => {
    const userId = req.headers.uid;
    const valueObj = req.body.value
    const recordId = valueObj.id;
    const q = 'UPDATE records SET invoicenumber = ?, customername = ?, customeraddress = ?, suppliername = ?, supplieraddress = ?, invoicedate = ?, currency = ?, totalamount = ?, totaltax = ? WHERE id=? AND uid =?';
    const values = [valueObj.invoicenumber, valueObj.customername, valueObj.customeraddress, valueObj.suppliername, valueObj.supplieraddress, valueObj.invoicedate, valueObj.currency, valueObj.totalamount, valueObj.totaltax, recordId, userId]
    db.query(q, values, (err, results)=>{
        if (err) res.status(500).json(err);
        return res.status(200).send('Record updated!');
    } )
}


export const removeFromAllExports = (req,res) => {
    const userId = req.headers.uid;
    const recordId = req.body.key.id;
    const q = 'DELETE FROM records WHERE id=? AND uid =?';

    db.query(q, [recordId, userId], (err, results)=>{
        if (err) res.status(500).json(err);
        return res.status(200).send('Record deleted!');
    })
}
