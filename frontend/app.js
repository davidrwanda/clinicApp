
const express = require('express');
const { join } = require('path');
const path = require('path');

const app  = express();

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'index.html'));
});
app.get('/nurse', (req, res, next) => {
    -res.sendFile(path.join(__dirname, 'public/views', 'nurse-view.html'));
});
app.get('/nurse/:patientId', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views/', 'nurse.html'))
});
app.get('/doctor/:patientId', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views/', 'doctor.html'))
});
app.get('/doctor', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'doctor-view.html'));
});
app.get('/labo', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'labo-view.html'));
});
app.get('/labo/:patientId', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'labo-patient.html'));
});
app.get('/conclusion', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'conclusion.html'));
});
app.get('/pharma', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'pharmacy.html'));
});
app.get('/pharma/:medId', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'medecin.html'));
});
app.get('/hospitalization', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'hospitalization.html'));
});
app.get('/ordonance', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'ordonance.html'));
});
app.get('/invoices', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'accounting.html'));
});
app.get('/invoice/1', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/views', 'single-invoice.html'));
});
app.use(express.static(path.join(__dirname,'public/assets')));

app.listen(9090);