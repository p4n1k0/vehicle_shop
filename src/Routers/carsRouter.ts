import express from 'express';
import CarsController from '../Controllers/CarsController';

const router = express.Router();

router.post(
  '/',
  (req, res, next) => new CarsController(req, res, next).create(),
);

router.get(
  '/',
  (req, res, next) => new CarsController(req, res, next).getAll(),
);

router.get(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).getById(),
);

router.put(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).update(),
);

export default router;
