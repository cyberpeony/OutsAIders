import mongoose, { Schema, model, models } from 'mongoose';

const financeSchema = new Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        index: true
    },
    userId: {
        type: String,
        required: true
    },
    financeType: {
        type: String,
        required: true
    },
    concept: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dateFinance: {
        type: Date,
        required: false
    },
}, {
    timestamps: true
});

export default models.Finances || model('Finances', financeSchema);
