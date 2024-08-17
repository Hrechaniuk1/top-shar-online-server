import { Schema, model } from "mongoose";

const balloonSchema = {
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
};

export const balloonsCollection = model('balloons', balloonSchema);
