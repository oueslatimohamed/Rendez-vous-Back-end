import express from 'express';
import { cancelRdv, createRdv, getMyOwnerRdv } from '../controllers/rdvController.js';
import { protect } from '../middlewares/authorization.js';

const router = express.Router();

router
.route("/addrdv")
.post(protect,createRdv);

router
.route("/getmyrdv")
.get(protect,getMyOwnerRdv);



router
.route("/cancelrdv/:_id")
.delete(protect,cancelRdv);

export default router;