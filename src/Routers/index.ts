import express from 'express';
import cars from './carsRouter';

const router = express.Router();

router.use('/cars', cars);

export default router;
