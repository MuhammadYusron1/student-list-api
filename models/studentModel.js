import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 2, maxLength: 36},
        studentID: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return /\d{3}-\d{3}-\d{4}/.test(value);
                },
                message: (props) => `${props.value} is not a valid student ID`,
            },
        },
        age: {type: Number, required: true, min: 15, max: 63},
        sex: {
            type: String, 
            required: true, 
            enum: {
                values: ['M', 'F'],
                message: '{VALUE} is not a valid sex type, insert M or F'
            },
            // validate: {
            //     validator: (value) => {
            //         if ((value != 'M') || (value != 'F')) {
            //             throw new Error('Invalid sex type');
            //         }
            //         return true;
            //     },
            //     message: (props) => `${props.value} is not a valid sex type`
            // }
        },
        address: {type: String, required: true, maxLength: 64},
        subject: {
            type: String,
            required: true,
            enum: {
                values: ['Engineering', 'Math', 'Law', 'History', 'Art', 'Accounting', 'Science'],
                message: '{VALUE} is not a valid subject value',
            },
            default: 'Engineering',
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Student', studentSchema);