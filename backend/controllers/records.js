import { db } from '../db.js';
import jwt from 'jsonwebtoken';
import fs from "fs";
export const getRecords = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token,'jwtkey', (err, userInfo)=>{
        if (err) return res.status(403).json('Token is not valid');
        const q = 'SELECT id, invoicenumber, parsedate, suppliername FROM records WHERE uid = ?'
        
        db.query(q, [userInfo.id], (err, results) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(results);
        })
    } )   
}

export const getRecord = (req,res) => {
        console.log(req)
        const userId = req.headers.uid   
        const recordId = req.params.id;
        const q = 'SELECT invoicenumber, customername, customeraddress, suppliername, supplieraddress, invoicedate, currency, totalamount, totaltax, parsedate FROM records WHERE id=? AND uid =?';
        db.query(q, [recordId, userId], (err, results)=>{
            if (err) return res.status(500).json(err);
            const responseObj = {
                result: results,
                count: results.length
              }
              return res.status(200).json(responseObj);
        })
    
}

export const getPdf = (req, res)=> {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated");
    console.log(req.params.id)
    jwt.verify(token,'jwtkey', (err, userInfo)=>{
        if (err) return res.status(403).json('Token is not valid');
        const recordId = req.params.id;
        const q = 'SELECT fileurl FROM records WHERE id =? AND uid =?';
        db.query(q, [recordId, userInfo.id], (err, results)=>{
            if (err) return res.status(500).json(err);
            console.log(results[0].fileurl)
            let buffer = fs.readFileSync(results[0].fileurl);
            const b64 = buffer.toString('base64')
            return res.status(200).json(b64);
            
        })
    })

}

export const updateRecord = (req, res) => {
    const userId = req.headers.uid
    const postId = req.params.id;
    const valueObj = req.body.value
    const q = 'UPDATE records SET invoicenumber = ?, customername = ?, customeraddress = ?, suppliername = ?, supplieraddress = ?, invoicedate = ?, currency = ?, totalamount = ?, totaltax = ? WHERE id=? AND uid =?';
    const values = [valueObj.invoicenumber, valueObj.customername, valueObj.customeraddress, valueObj.suppliername, valueObj.supplieraddress, valueObj.invoicedate, valueObj.currency, valueObj.totalamount, valueObj.totaltax, postId, userId]

    db.query(q,values, (err, results)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).send('Record Updated!')
    }
    )
}

export const deleteRecord = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token,'jwtkey', (err, userInfo)=>{
        if(err) return res.status(403).json('Token is not valid');
        const recordId = req.params.id;
        const q = 'DELETE FROM records WHERE id =? AND uid =?';

        db.query(q, [recordId, userInfo.id], (err, results)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json('Record Deleted!');
        })

    })
}


