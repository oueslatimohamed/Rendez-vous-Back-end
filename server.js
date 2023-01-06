import express, { json } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import rdvRoutes from './routes/rdvRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

dotenv.config()



const app = express();
const port = process.env.PORT || 9090;

const databaseName = 'rendezVous-db';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
   .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/img",express.static('public/images'));

app.get('/', function(req,res) {
     res.send("welcome to rendez-vous")
   });

app.use('/user',userRoutes);
app.use('/rdv',rdvRoutes);
app.use('/admin',adminRoutes);

app.listen(port,() =>{
    console.log("localhost:"+ port)
})
   