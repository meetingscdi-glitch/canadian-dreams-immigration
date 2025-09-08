const express = require('express');
const router = express.Router();
const {
    addSubService,
    getAllSubServices,
    getSubServiceById,
    editSubService,
    deleteSubService
} = require('../../controller/subServiceController');

// Sub-service routes
router.post('/add', addSubService);
router.get('/getAllSubServices', getAllSubServices);
router.get('/getSubServicesById/:id', getSubServiceById);
router.put('/edit', editSubService);
router.delete('/delete', deleteSubService);

module.exports = router;