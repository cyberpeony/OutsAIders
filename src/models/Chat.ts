import mongoose, { Schema, model, models } from 'mongoose';

const chatSchema = new Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        index: true
    },
    userMessage: {
        type: String,
        required: true
    },
    botMessage: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
});

export default models.Chat || model('Chat', chatSchema);
