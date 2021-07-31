const express = require('express');

const router = express.Router();

const pharController = require('../controllers/pharmacy');

router.get('/', pharController.getPharIndex);

router.get('/medecins', pharController.getMedecins);
router.post('/medecin', pharController.postAddMedecin);
router.put('/medecin/:medecinId', pharController.putEditMedecin);
router.delete('/medecin/:medecinId', pharController.deleteMedecin);

router.get('/inventories', pharController.getInventories);
router.post('/ordonance', pharController.postOrdonance);
router.get('/ordonance', pharController.getOrdonance);
router.get('/branch', pharController.getBranchInventory);

module.exports = router;