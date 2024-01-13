import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 2, maxLength: 36},
        age: {type: Number, required: true, min: 15, max: 63},
        sex: {
            type: String, 
            required: true, 
            enum: {
                values: ['M', 'F'],
                message: '{VALUE} is not a sex type, insert M or F'
            }
        },
        address: {type: String, required: true, maxLength: 64},
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Student', studentSchema);