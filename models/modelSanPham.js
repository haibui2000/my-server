import mongoose from 'mongoose';
const { Schema } = mongoose;

const detailSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    weightMax: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    nguyenLieu: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    nsx: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

const schema = new Schema({
    id: Schema.Types.ObjectId,
    img: {
        type: String,
        required: true,
    },
    backImg: {
        type: String,
        required: true,
    },
    arrImg: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    typeSP: {
        type: Number,
        required: true,
    },
    details: {
        type: detailSchema,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceSale: {
        type: Number,
        required: true,
    },
    sale: {
        type: Boolean,
        default: false,
        required: true,
    },
    sold: {
        type: Number,
        default: 0,
        required: true,
    },
    hide: {
        type: Boolean,
        default: false,
        required: true,
    },
    seasons:{
        type: Number,
        required: true,
    }
},
    { timestamps: true }
);
export const ModelSanPham = mongoose.model('sanpham', schema)
