import express from 'express'
import { bycity, bycitycount, bytype, createHotel, getAllHotels, getHotel } from '../controllers/hotels.js';


const router = express.Router();


router.post('/', createHotel);

router.get('/find/:id', getHotel);

router.get('/', getAllHotels);
router.get('/bycity', bycity);
router.get('/bycitycount', bycitycount);
router.get('/bytype', bytype);

export default router;