const { Schema } = require('mongoose');
const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        orderDate: {
            type: Date,
            required: true,
        },
    },
    {
        collection: 'orders',
        timestamps: true,
    },
);
module.exports = orderSchema;
