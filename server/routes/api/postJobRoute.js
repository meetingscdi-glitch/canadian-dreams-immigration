const express = require('express');
const router = express.Router();
const {createPostJob,getAllPostJobs,getPostJobById,updatePostJob,deletePostJob} = require('../../controller/postJobController');
const upload = require('../../middleware/multer');
const {verifyToken}=require('../../middleware/authMiddleware');
 
router.post('/add',verifyToken, upload.single('image'), createPostJob);
router.get('/getAllPostJob', getAllPostJobs);
router.get('/getPostJobById/:_id', getPostJobById);
router.put('/edit',verifyToken, upload.single('image'), updatePostJob);
router.delete('/delete',verifyToken, deletePostJob);

module.exports = router;