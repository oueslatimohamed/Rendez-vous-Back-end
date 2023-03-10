import mongoose from "mongoose";

const { Schema, model} = mongoose;
const userSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true
        },
        prenom :{
            type: String,
            required: true
        },
        tel :{
            type: Number,
            required: true
        },
        username :{
            type: String,
            required: true
        },
        password :{
            type: String,
            required: true
        },
        role :{
            type: String,
            enum :['User','Admin'],
            default: 'User'
        },
    },
    {
        timestamps: true
    }
);

export default model('User',userSchema);