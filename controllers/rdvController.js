import Rdv from "../models/rdv.js";

export function createRdv (req, res) {
    Rdv.create({
        date: req.body.date,
        heure: req.body.heure,
        idowner: req.user._id
    })
    .then(newRdv => {
        res.status(200).json(newRdv);
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}

export function getMyOwnerRdv (req,res) {
    Rdv.find({idowner: req.user._id})
    .then((rdvs) => {
        res.status(200).json({rdvs : rdvs});
    })
    .catch((err) => {
        res.status(500).json({error : err}) 
    })
}

export function cancelRdv (req,res) {
    Rdv.findOneAndDelete({_id : req.params._id,idowner:req.user._id})
    .then((rdv) => {
        res.status(200).json({ message: "Rendez-vous is deleted !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}

