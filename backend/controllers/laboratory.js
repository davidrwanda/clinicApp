const Exam = require('../models/exam');

exports.getlaboIndex = (req, res, next) => {
    res.json({title: 'Labo page'});
    console.log('labo page');
}

exports.getExams = (req, res, next) => {
   Exam.findAll()
     .then(exams => {
         res.status(201).json({exams: exams});
     })
     .catch(err => console.log(err));
};

exports.postAddExam = (req, res, next) => {
    // const name = req.body.name;
    // const description = req.body.description;
    const name = "Malaria 1";
    const description = "";
    
    const exam = new Exam({
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

exports.putEditExam = (req, res, next) => {
    const examId = req.params.examId;
    // const name = req.body.name;
    // const origin = req.body.origin;
    // const type = req.body.type;
    // const description = req.body.description;
    // const openingStock = req.body.openingStock; 
    const name = "Malaria-1";
    const description = "";

    Exam.findByPk(examId)
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

exports.deleteExam = (req, res, next) =>{
    const examId = req.params.examId;
    Exam.findByPk(examId)
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
