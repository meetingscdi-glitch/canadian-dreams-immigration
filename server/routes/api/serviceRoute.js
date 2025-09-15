const express = require('express');
const router = express.Router();
const {
    addService,
    getAllServices,
    getServiceById,
    editService,
    deleteService
} = require('../../controller/serviceController');

// Service routes
router.post('/add', addService);
router.get('/getAllServices', getAllServices);
router.get('/getServicesById/:id', getServiceById);
router.put('/edit', editService);
router.delete('/delete', deleteService);

module.exports = router;