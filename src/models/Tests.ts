import { Schema, model, models } from 'mongoose';

export const testSchema = new Schema({
    test: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default models.Tests || model('Tests', testSchema)