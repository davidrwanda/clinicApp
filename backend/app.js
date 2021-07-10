const express = require('express');

const app = express();

const Sequelize = require('./util/database');
const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');
const doctorRoutes = require('./routes/doctor');
const financeRoutes = require('./routes/finance');
const laboRoutes = require('./routes/laboratory');
const nurseRoutes = require('./routes/nurse');
const pharRoutes = require('./routes/pharmacy');
const recepRoutes = require('./routes/reception');
const authRoutes = require('./routes/auth');

const errorsController = require('./controllers/errors');
const sequelize = require('./util/database');

const User = require('./models/user');
const Patient = require('./models/patient');
const Medecin = require('./models/medecin');
const Exam = require('./models/exam');
const Disease = require('./models/disease');
const BasicExam = require('./models/basicExam');

app.use('/clinic', homeRoutes);
app.use('/admin', adminRoutes);
app.use('/clinic/doctor', doctorRoutes);
app.use('/finance', financeRoutes);
app.use('/clinic/labo', laboRoutes);
app.use('/clinic/nurse', nurseRoutes);
app.use('/clinic/pharmacy', pharRoutes);
app.use('/clinic/reception', recepRoutes);
app.use('/auth', authRoutes);
app.use(errorsController.getError);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.data;
    res.status(status).json({message: message, data: data});
});

sequelize
.sync()
.then((res)=>{
    return User.findByPk(1);
})
.then((user) => {
    if(!user){
        return User.create({name: 'DAVID NTAMAKEMWA', email: 'test@clinic.com', phone: '+250788475841', role: 'receptionist', username: 'david', qualification: 'A0', password: '1234'});
    }
    return user;
})
.then(()=>{
    app.listen(8080); 
})
.catch(err => console.log(err));
