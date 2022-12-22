import express from 'express';
import { getRecords } from '../controllers/records.js';

const router = express.Router();

router.get('/', getRecords);
// router.get('/:id', getRecord);
// router.post('/', addRecord);
// router.put('/:id', updateRecord);
// router.delete('/:id', deleteRecord);




export default router