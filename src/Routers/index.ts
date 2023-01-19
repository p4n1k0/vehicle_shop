import express from 'express';
import cars from './carsRouter';
import motorcycles from './motorcyclesRouter';

const router = express.Router();

router.use('/cars', cars);
router.use('/motorcycles', motorcycles);

export default router;
