const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        Required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//demostrar as páginas
ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);