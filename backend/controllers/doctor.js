
const disease = require('../models/disease');
const Disease = require('../models/disease');
exports.getDoctorIndex = (req, res, next) => {
    res.json({title: 'Doctor page'});
    console.log('doctor page');
}

exports.getDiseases = (req, res, next) => {
   Disease.findAll()
     .then(diseases => {
         res.status(201).json({diseases: diseases});
     })
     .catch(err => console.log(err));
};

exports.postAddDisease = (req, res, next) => {
    // const name = req.body.name;
    // const description = req.body.description;
    const name = "Malaria";
    const type = ""
    const description = "";
    
    const disease = new Disease({
        name: name,
        type: type,
        description: description
    });

    disease.save()
    .then(disease => {
        res.status(200).json({message: "created successfull", disease: disease});
    })
    .catch(err => {
        res.status(500).json({message: "query error"});
        console.log(err);
    });
}

exports.putEditDisease = (req, res, next) => {
    const diseaseId = req.params.diseaseId;
    // const name = req.body.name;
    // const origin = req.body.origin;
    // const type = req.body.type;
    // const description = req.body.description;
    // const openingStock = req.body.openingStock; 
    const name = "Malaria-1";
    const type = "";
    const description = "";

    Disease.findByPk(diseaseId)
        .then(disease => {
            if(!disease) {
                res.status(403).json({message: 'record not foud'});
            }
            else{
                disease.name = name;
                disease.type = type;
                disease.description = description;
                disease.save()
                    .then(result => {
                        res.status(201).json({message:"successful updated", disease: result});
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}

exports.deleteDisease = (req, res, next) =>{
    const diseaseId = req.params.diseaseId;
    Disease.findByPk(diseaseId)
        .then(disease => {
            if(!disease) {
                res.status(403).json({message: 'record not found'});
            }
            else{
                disease.destroy();
                res.status(201).json({message:'deleted', deletedItem: disease.name});
            }
        })
        .catch(err => console.log(err));
};
