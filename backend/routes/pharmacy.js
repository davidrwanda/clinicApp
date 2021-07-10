const express = require('express');

const router = express.Router();

const pharController = require('../controllers/pharmacy');
const { route } = require('./home');

router.get('/', pharController.getPharIndex);

router.get('/medecins', pharController.getMedecins);
router.post('/medecin', pharController.postAddMedecin);
router.put('/medecin/:medecinId', pharController.putEditMedecin);
router.delete('/medecin/:medecinId', pharController.deleteMedecin);

module.exports = router;