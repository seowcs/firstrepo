import { db } from '../db.js';
import jwt from 'jsonwebtoken';
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