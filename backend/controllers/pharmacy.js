const Medecin = require('../models/medecin');


exports.getPharIndex = (req, res, next) => {
    res.json({title: 'pharmacy page'});
    console.log('pharmacy page');
}

exports.getMedecins = (req, res, next) => {
    Medecin.findAll()
         .then(medecins => {
             res.status(201).json({medecins: medecins});
         })
         .catch(err => {
             res.status(500).json({message: "server error"});
             console.log(err)
         });
};

exports.postAddMedecin = (req, res, next) => {
    // const name = req.body.name;
    // const origin = req.body.origin;
    // const type = req.body.type;
    // const description = req.body.description;
    // const openingStock = req.body.openingStock;
    const name = "paracetamol-1";
    const origin = "DRC";
    const type = "any";
    const description = "";
    const openingStock = 0; 
    const date = Date();
    const medecin = new Medecin({
        name: name+date,
        origin: origin,
        type: type,
        description: description,
        openingStock: openingStock
    });

    medecin.save()
         .then(medecin => {
             res.status(200).json({message: "created successfull", medecin: medecin});
         })
         .catch(err => {
             res.status(500).json({message: "query error"});
             console.log(err);
         });

}

exports.putEditMedecin = (req, res, next) => {
    const medecinId = req.params.medecinId;
    // const name = req.body.name;
    // const origin = req.body.origin;
    // const type = req.body.type;
    // const description = req.body.description;
    // const openingStock = req.body.openingStock; 
    const name = "paracetamol-2";
    const origin = "DRC";
    const type = "any";
    const description = "";
    const openingStock = 0; 

    Medecin.findByPk(medecinId)
        .then(medecin => {
            if(!medecin) {
                res.status(403).json({message: 'record not foud'});
            }
            else{
                medecin.name = name;
                medecin.origin = origin;
                medecin.type = type;
                medecin.description = description;
                medecin.openingStock = openingStock;
                medecin.save()
                    .then(result => {
                        res.status(201).json({message:"successful updated", medecin: result});
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}

exports.deleteMedecin = (req, res, next) =>{
    const medecinId = req.params.medecinId;
    Medecin.findByPk(medecinId)
        .then(medecin => {
            if(!medecin) {
                res.status(403).json({message: 'record not found'});
            }
            else{
                medecin.destroy();
                res.status(201).json({message:'deleted', deletedItem: medecin.name});
            }
        })
        .catch(err => console.log(err));
};
