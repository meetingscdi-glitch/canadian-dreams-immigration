const express = require('express');
const router = express.Router();
const {createServiceCategory,getAllServiceCategories,getServiceCategoryById,updateServiceCategory,deleteServiceCategory} = require('../../controller/serviceCategoryController');
const {verifyToken}=require('../../middleware/authMiddleware')
 
router.post('/add',verifyToken, createServiceCategory);
router.get('/getAllServices', getAllServiceCategories);
router.get('/getServicesById/:id', getServiceCategoryById);
router.put('/edit',verifyToken, updateServiceCategory);
router.delete('/delete',verifyToken, deleteServiceCategory);

module.exports = router;