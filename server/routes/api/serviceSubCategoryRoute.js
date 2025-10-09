const express = require('express');
const router = express.Router();
const {createServiceSubCategory,getAllServiceSubCategories,getServiceSubCategoryById,updateServiceSubCategory,deleteServiceSubCategory} = require('../../controller/serviceSubCategoryController');
const upload=require('../../middleware/multer');
const {verifyToken}=require('../../middleware/authMiddleware')

router.post('/add',verifyToken,upload.single('image'), createServiceSubCategory);
router.get('/getAllSubServices', getAllServiceSubCategories);
router.get('/getSubServicesById/:id', getServiceSubCategoryById);
router.put('/edit',verifyToken,upload.single("image") ,updateServiceSubCategory);
router.delete('/delete',verifyToken, deleteServiceSubCategory);

module.exports = router;