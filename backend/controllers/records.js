import { db } from '../db.js';

export const getRecords = (req,res) => {
    const q = 'SELECT id, invoicenumber, parsedate, suppliername FROM records WHERE '
}