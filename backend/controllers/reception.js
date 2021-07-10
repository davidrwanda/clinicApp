const Patient = require('../models/patient');
const User = require('../models/user');
exports.getRecepIndex = (req, res, next) => {
    res.json({title: 'reception page'});
    console.log('reception page');
}

exports.getPatients = (req, res, next) => {
    Patient.findAll()
        .then(patients => {
            res.status(200).json({patients: patients});
        })
        .catch(err => console.log(err));

}

exports.postAddPatient = (req, res, next) => {

    // const patName = req.body.patName;
    // const patBdate = req.body.patBdate;
    // const patNationality = req.body.patNationality;
    // const patCountry = req.body.patCountry;
    // const patIdNo = req.body.patIdNo;
    // const patPassportNo = req.body.patPassportNo;
    // const patDistrict = req.body.patDistrict;
    // const patSector = req.body.patSector;
    // const patCell = req.body.patCell;
    // const patVillage = req.body.patVillage;
    const patName = "SEBAGABO AIME";
    const patBdate = "01/01/1997";
    const patNationality = "RWANDESE";
    const patCountry = "RWANDA";
    const patIdNo = "1199780020665030";
    const patPassportNo = "";
    const patDistrict = "NYARUGENGE";
    const patSector = "NYARUGENGE";
    const patCell = "BIRYOGO";
    const patVillage = "BIRYOGO";

    const patient = new Patient({
        patName : patName,
        patBdate : patBdate,
        patNationality : patNationality,
        patCountry : patCountry,
        patIdNo : patIdNo,
        patPassportNo: patPassportNo,
        patDistrict : patDistrict,
        patSector : patSector,
        patCell : patCell,
        patVillage : patVillage
    });

    patient.save()
        .then(patient => {
            console.log(patient);
            res.status(201).json({message: 'patient created', name: patient.patName});
        })
        .catch(err => console.log(err));
};

exports.putEditPatient = (req, res, next) => {
    const patId = req.params.patientId;
    const patName = "DAVID NTAMAKEMWA";
    const patBdate = "01/01/1997";
    const patNationality = "RWANDESE";
    const patCountry = "RWANDA";
    const patIdNo = "1199780020665030";
    const patPassportNo = "";
    const patDistrict = "NYARUGENGE";
    const patSector = "NYARUGENGE";
    const patCell = "BIRYOGO";
    const patVillage = "BIRYOGO";

    Patient
     .findByPk(patId)
       .then(result => {
           if(!result){
            res.status(403).json({message: 'record not found'});   
           }
           else{
            result.patName = patName;
            result.patBdate = patBdate;
            result.patNationality = patNationality;
            result.patCountry = patCountry;
            result.patIdNo = patIdNo;
            result.patPassportNo = patPassportNo;
            result.patDistrict = patDistrict;
            result.patSector = patSector;
            result.patCell = patCell;
            result.patVillage = patVillage; 
            return result.save();
           }

       })
       .then(result => {
        res.status(201).json({message: "successfull updated",name: result.patName});
       })
       .catch(err => console.log(err));
}

exports.deletePatient = (req, res, next) => {
    const patId = req.params.patientId;
    Patient.findByPk(patId)
                    .then((result)=>{
                        if(!result){
                            res.status(403).json({message: 'record not found'});   
                           }
                           else{
                            res.status(201).json({message: 'successfull deleted', name: result.patName});
                            return result.destroy();
                           }
                        
                    })
                    .catch(err => console.log(err));


}