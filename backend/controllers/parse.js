import { db } from '../db.js';
 
 export const getData = (req, res) => {
    const q = 'SELECT invoicenumber, customername, customeraddress, suppliername, supplieraddress, invoicedate, currency, totalamount, totaltax FROM records ORDER BY id DESC LIMIT 1';

    db.query(q, (err, results) => {
        if (err) return res.status(500).json(err);
        const responseObj = {
          result: results,
          count: results.length
        }
        return res.status(200).json(responseObj);
    })
  }

  export const updateData = (req, res) => {
    const q = 'UPDATE records SET invoicenumber = ?, customername = ?, customeraddress = ?, suppliername = ?, supplieraddress = ?, invoicedate = ?, currency = ?, totalamount = ?, totaltax = ? ORDER BY id DESC LIMIT 1';

    const valueObj = req.body.value

    const values = [valueObj.invoicenumber, valueObj.customername, valueObj.customeraddress, valueObj.suppliername, valueObj.supplieraddress, valueObj.invoicedate, valueObj.currency, valueObj.totalamount, valueObj.totaltax]

    db.query(q, values, (err, results) => {
    if (err) return res.status(500).json(err)
    return res.status(200).send('Records Updated!')
    })
    
  }