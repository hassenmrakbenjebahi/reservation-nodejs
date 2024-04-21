import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const reservationSchema = new Schema(
    {
        idUser: {
            type: Number,
            required: true
        },
        idSalle: {
            type: String,
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default model('Reservation', reservationSchema);