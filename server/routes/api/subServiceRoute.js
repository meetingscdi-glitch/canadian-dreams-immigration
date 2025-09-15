const express = require('express');
const router = express.Router();
const upload = require('../../middleware/multer');
const { addSubService, getAllSubServices, getSubServiceById, editSubService, deleteSubService } = require('../../controller/subServiceController');

router.post('/add', upload.single('image'), addSubService);
router.get('/getAllSubServices', getAllSubServices);
router.get('/getSubServicesById/:id', getSubServiceById);
router.put('/edit', upload.single('image'), editSubService);
router.delete('/delete', deleteSubService);

module.exports = router;