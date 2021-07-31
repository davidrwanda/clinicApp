
const Medecin = require('../models/medecin');
const Ordonance = require('../models/ordonance');
const stockIn = require('../models/stockIn');
const stockOut = require('../models/stockOut');


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

exports.getInventories = (req, res, next) => {
    let totalIn = 0;
    let totalOut = 0;
    let totalQty = 0;
      const medecins = Medecin.findAll();
      medecins
      .then(medecins => {
          medecins.forEach(medecin => {
              stockIn.sum('qty', { where: {medecinId : medecin.id}})
              .then((total)=> totalIn = total).catch(err => console.log(err));
              stockOut.sum('qty', { where: {medecinId : medecin.id}})
              .then((total)=> totalOut = total).catch(err => console.log(err));
              console.log(totalOut);
              totalQty = medecin.openingStock + totalIn-totalOut;
              medecin.qty = totalQty;
          });
        res.json({inventory: medecins});    
      })
      .catch(err => console.log(err));
      
      
}
exports.getBranchInventory = (req, res, next) => {
    let totalIn = 0;
    let totalOut = 0;
    let totalQty = 0;
    let branch = "KIGALI";
    const medecins = Medecin.findAll();
    medecins
    .then(medecins => {
        medecins.forEach(medecin => {
            stockOut.sum('qty', { where: {medecinId : medecin.id, branchName: branch}})
            .then((total)=> {totalIn = parseInt(total);console.log(totalIn);}).catch(err => console.log(err));
           
            console.log("<<<----------- total in ------------->>>>")
            
            Ordonance.sum('qty', { where: {medecinId : 1, branchName: branch}})
            .then((total)=> {totalOut = parseInt(total); console.log(totalOut);} ).catch(err => console.log(err));
            console.log("<<<----------- total out------------->>>>")
            totalQty = medecin.openingStock + totalIn-totalOut;
            medecin.qty = totalQty;
        });
      res.json({branch: medecins});    
    })
    .catch(err => console.log(err));
}
exports.postOrdonance = (req, res, next) => {
    const qty = 1;
    const price = 200;
    const branchName = "KIGALI";
    const medecin = 1;

    const ordonance = new Ordonance({
        qty: qty,
        price: price,
        branchName: branchName,
        medecinId: medecin
    });

    ordonance.save()
              .then((ordonance => {
                res.status(200).json({ordonance: ordonance,message: "ordonance created successfull"});
              }))
              .catch(err => console.log(err));
}
exports.getOrdonance = (req, res, next) => {
    Ordonance.findAll()
              .then((ordonance) => {
                  res.json({ordonance: ordonance});
              })
              .catch(err => console.log(err));
}