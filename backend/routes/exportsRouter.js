import express from 'express';
import {getAllExports, updateAllExports, insertAllExports, removeFromAllExports} 
from '../controllers/exports.js';

const router = express.Router();

router.post('/', getAllExports);
router.post('/update', updateAllExports);
router.post('/insert', insertAllExports);
router.post('/update', removeFromAllExports);

export default router