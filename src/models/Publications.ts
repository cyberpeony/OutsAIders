import mongoose, { Schema, model, models } from 'mongoose';

const publicationSchema = new Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        index: true
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publicationType: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default models.Publications || model('Publications', publicationSchema);
