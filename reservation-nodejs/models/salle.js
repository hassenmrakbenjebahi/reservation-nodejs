import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const salleSchema = new Schema(
    {
        capacity: {
            type: Number,
            required: true
        },
        equipement: {
            type: String,
            required: true
        },
        disponibility: {
            // 1 dispo sinon 0 non dispo 
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default model('Salle', salleSchema);