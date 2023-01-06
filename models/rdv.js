import mongoose, { SchemaType } from "mongoose";

const { Schema, model} = mongoose;

const rdvSchema =  new Schema(
    {
        date :{
            type: Date,
            required: true
        },
        heure :{
            type: String,
            required: true
        },
        idowner:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        status:{
            type: String,
            enum :['EnAttente','Accepte','Refuse'],
            default: 'EnAttente'
        }

    },
    {
        timestamps: true
    }
);

export default model('Rdv',rdvSchema);