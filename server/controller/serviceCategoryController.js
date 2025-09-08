const serviceCategory = require('../models/serviceCategoryModel');
const serviceSubCategory = require('../models/serviceSubCategoryModel');

async function createServiceCategory (req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    };
    
    const serviceExisted=await serviceCategory.findOne({ name: { $regex: `^${name}$`, $options: "i" }});
    if(serviceExisted){
        return res.status(400).json({status:400,message:"Service Name Alredy Existed,Please Enter a New Service"})
    }
    await serviceCategory.create({ name });
    res.status(200).json({status:200,message:"Service Created Successfully"});
  } catch (error) {
    res.status(500).json({ status:500,message: 'Server error', error: error.stack });
  }
};

 async function getAllServiceCategories (req, res) {
  try {
  const serviceCategories = await serviceCategory.aggregate([
  {
    $lookup: {
      from: "servicesubcategories",    
      localField: "_id",              
      foreignField: "serviceCategoryId", 
      as: "subCategories"            
    },
  },
  {$project:{name:1,"subCategories.name":1}},  
  { $sort: { createdAt: -1 } }
]);

 
    res.status(200).json({status:200, message:"All the Services Get Successfully",response:serviceCategories});
  } catch (error) {
    res.status(500).json({status:500, message: 'Server error', error: error.message });
  }
};

 async function getServiceCategoryById (req, res) {
  try {
    const serviceCategoryData = await serviceCategory.findById(req.params.id);
    if (!serviceCategory) {
      return res.status(404).json({status:404, message: 'Service category not found' });
    }
    res.status(200).json({status:200,message:"Services Get Successfully",response:serviceCategoryData});
  } catch (error) {
    res.status(500).json({ status:500,message: 'Server error', error: error.message });
  }
};

 async function updateServiceCategory  (req, res) {
  try {
    const { name ,_id} = req.body;
    const serviceCategoryData = await serviceCategory.findByIdAndUpdate(
      _id,
      { name },
      { new: true }
    );
    if (!serviceCategoryData) {
      return res.status(404).json({status:400, message: 'Service category not found' });
    }
    res.status(200).json({status:200,message:"Service Created Successfully",response:serviceCategoryData});
  } catch (error) {
    res.status(500).json({status:500, message: 'Server error', error: error.message });
  }
};

 async function deleteServiceCategory  (req, res)  {
  try {
    const serviceCategoryData = await serviceCategory.findByIdAndDelete({_id:req.body._id});
    if (!serviceCategoryData) {
      return res.status(404).json({status:404, message: 'Service category not found' });
    }
    await serviceSubCategory.deleteMany({serviceCategoryId:req.body._id})
    res.status(200).json({status:200, message: 'Service category deleted Successfully' });
  } catch (error) {
    res.status(500).json({status:500, message: 'Server error', error: error.message });
  }
};

module.exports={createServiceCategory,getAllServiceCategories,getServiceCategoryById,updateServiceCategory,deleteServiceCategory}