import express from 'express';
import MotorcylesController from '../Controllers/MotorcyclesController';

const router = express.Router();

router.post(
  '/',
  (req, res, next) => new MotorcylesController(req, res, next).create(),
);

export default router;
