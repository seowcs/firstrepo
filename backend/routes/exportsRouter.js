import express from 'express';
import {getAllExports, updateAllExports, removeFromAllExports} 
from '../controllers/exports.js';

const router = express.Router();

router.post('/', getAllExports);
router.post('/update', updateAllExports);

router.post('/remove', removeFromAllExports);

export default router