const basicExam = require('../models/basicExam');

exports.getNurseIndex = (req, res, next) => {
    res.json({title: 'Nurse page'});
    console.log('nurse page');
}

exports.getBasicExams = (req, res, next) => {
   basicExam.findAll()
     .then(exams => {
         res.status(201).json({exams: exams});
     })
     .catch(err => console.log(err));
};

exports.postAddBasicExam = (req, res, next) => {
    // const name = req.body.name;
    // const description = req.body.description;
    const name = "Temperature";
    const description = "";
    
    const exam = new basicExam({
        name: name,
        description: description
    });

    exam.save()
    .then(exam => {
        res.status(200).json({message: "created successfull", exam: exam});
    })
    .catch(err => {
        res.status(500).json({message: "query error"});
        console.log(err);
    });
}

exports.putEditBasicExam = (req, res, next) => {
    const examId = req.params.examId;
    // const name = req.body.name;
    // const origin = req.body.origin;
    // const type = req.body.type;
    // const description = req.body.description;
    // const openingStock = req.body.openingStock; 
    const name = "Malaria-1";
    const description = "";

    basicExam.findByPk(examId)
        .then(exam => {
            if(!exam) {
                res.status(403).json({message: 'record not foud'});
            }
            else{
                exam.name = name;
                exam.description = description;
                exam.save()
                    .then(result => {
                        res.status(201).json({message:"successful updated", exam: result});
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}

exports.deleteBasicExam = (req, res, next) =>{
    const examId = req.params.examId;
    basicExam.findByPk(examId)
        .then(exam => {
            if(!exam) {
                res.status(403).json({message: 'record not found'});
            }
            else{
                exam.destroy();
                res.status(201).json({message:'deleted', deletedItem: exam.name});
            }
        })
        .catch(err => console.log(err));
};
