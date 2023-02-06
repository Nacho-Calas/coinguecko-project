import express from 'express';
import { getCoins } from '../controllers/coins';

const router = express.Router();


router.get('/', getCoins)