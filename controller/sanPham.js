import { ModelSanPham } from "../models/modelSanPham.js";
import mongoose from 'mongoose';

export const _getSanPham = async (req, res) => {
    try {
        var perPage = Math.max(0, req.query.perPage);
        var pagenumber = Math.max(0, req.query.pagenumber);
        const value = await ModelSanPham.find().limit(perPage).skip(perPage * pagenumber).sort({ "createdAt": -1 });
        res.status(200).send({
            dataSP: value,
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const _getDataToSeasons = async (req, res) => {
    try {
        var perPage = Math.max(0, req.query.perPage);
        var pagenumber = Math.max(0, req.query.pagenumber);
        var seasonType = req.query.seasonType
        const value = await ModelSanPham.find({ seasons: 1 }).limit(perPage).skip(perPage * pagenumber).sort({ "createdAt": -1 });
        res.status(200).send({
            dataSP: value,
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const _search = async (req, res) => {
    try {
        var perPage = Math.max(0, req.query.perPage);
        var pagenumber = Math.max(0, req.query.pagenumber);
        var searchText = req.query.searchText
        var regex = new RegExp(searchText, 'i')
        const _search = await ModelSanPham.find({ name: regex }).limit(perPage).skip(perPage * pagenumber).sort({ "createdAt": -1 });
        res.status(200).send({
            dataSP: _search,
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
export const _getSPBestSeller = async (req, res) => {
    try {
        var perPage = Math.max(0, req.query.perPage);
        var pagenumber = Math.max(0, req.query.pagenumber);

        const value = await ModelSanPham.find().limit(perPage).skip(perPage * pagenumber).sort({ sold: -1 });
        res.status(200).send({
            dataSP: value,
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const _createSanPham = async (req, res) => {
    try {
        const { backImg, name, weightMax, unit, nguyenLieu, origin, nsx, typeSP, price, sale, seasons, title } = req.body
        const priceSale = req.body.priceSale ?? 0
        const sold = req.body.sold ?? 0
        const URL = `https://server-demo-native.herokuapp.com/backgrounds/`;

        const post = new ModelSanPham({
            id: new mongoose.Types.ObjectId(),
            img: "https://cdn.pixabay.com/photo/2016/09/13/09/25/kite-1666816_960_720.jpg",
            backImg: URL + backImg,
            arrImg: [
                'https://cdn.pixabay.com/photo/2022/06/04/19/57/river-7242735_960_720.jpg',
                'https://cdn.pixabay.com/photo/2022/05/23/18/45/bee-7216939_960_720.jpg',
                'https://cdn.pixabay.com/photo/2022/06/04/16/19/butterflies-7242320_960_720.jpg',
                'https://cdn.pixabay.com/photo/2022/06/10/11/28/love-in-a-mist-7254346_960_720.jpg',
            ],
            name: name,
            details: {
                title: title,
                weightMax: weightMax,
                unit: unit,
                nguyenLieu: nguyenLieu,
                origin: origin,
                nsx: nsx,
            },
            typeSP: typeSP,
            price: price,
            priceSale: priceSale ?? 0,
            sale: sale,
            sold: sold ?? 0,
            seasons: seasons
        })
        post.save();
        res.status(200).send({ newData: post });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(500).json({ error: error });
    }
}