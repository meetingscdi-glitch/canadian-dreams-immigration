const express = require('express');
const router = express.Router();
  

router.use("/auth",require('./authRoute'))
router.use("/blog", require('./blogRoute'));
router.use("/latestNews", require('./latestNewRoute'));
router.use("/faq", require('./faqRoute'));
router.use("/teamMember", require('./ourTeamRoute'));
router.use("/contactUs", require('./contactUsRoute'));
router.use("/service",require('./serviceCategoryRoute'));
router.use("/subService",require('./serviceSubCategoryRoute'));
router.use("/postJob",require('./postJobRoute'))
 
module.exports = router;
    