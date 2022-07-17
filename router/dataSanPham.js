import express from 'express';
import {_createSanPham, _getDataToSeasons, _getSanPham, _getSPBestSeller, _search} from '../controller/sanPham.js'

const router = express.Router();
router.get('/search', _search);
router.get('/sold', _getSPBestSeller);
router.get('/season', _getDataToSeasons);
router.post('/new', _createSanPham);
router.get('/', _getSanPham);


export default router;