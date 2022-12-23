import express from 'express';
import { getRecords, deleteRecord, getRecord, updateRecord, getPdf
  } from '../controllers/records.js';

const router = express.Router();

router.get('/', getRecords);
router.post('/:id', getRecord); 
router.post('/:id/update', updateRecord);
router.delete('/:id', deleteRecord);
router.get('/:id/pdf', getPdf);





export default router