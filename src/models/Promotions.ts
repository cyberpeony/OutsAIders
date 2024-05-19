import mongoose, { Schema, model, models } from 'mongoose';

const promotionsSchema = new Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        index: true
    },
    nameStore: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    typeOfPromotion: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    url: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default models.Promotions || model('Promotions', promotionsSchema);
