const serviceSubCategory = require('../models/serviceSubCategoryModel');
const serviceCategory = require('../models/serviceCategoryModel');

async function createServiceSubCategory(req, res) {
  try {
    const {
      serviceCategoryId,
      name,
      headerOne,
      headerTwo,
      SubHeaderTwo,
      paragraphOne,
      headerThree,
      SubHeaderThree,
      paragraphTwo,
      headerFour,
      SubHeaderFour,
      paragraphThree,
      headerFive,
      SubHeaderFive,
      paragraphFour,
      headerSix,
      SubHeaderSix,
      paragraphFive,
      headerSeven,
      SubHeaderSeven,
      paragraphSix
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ status: 400, message: "Image is required" });
    }
    const imageUrl = `http://localhost:3500/uploads/${req.file.filename}`;
    if (!serviceCategoryId || !name) {
      return res.status(400).json({ status: 400, message: 'Service category ID and name are required' });
    }
    const categoryExists = await serviceCategory.findById({ _id: serviceCategoryId });
    console.log("here")
    console.log(categoryExists, "categoryExists")
    if (!categoryExists) {
      return res.status(400).json({ status: 400, message: 'Invalid service category ID' });
    }

    await serviceSubCategory.create({
      serviceCategoryId,
      name,
      image: imageUrl,
      headerOne,
      headerTwo,
      SubHeaderTwo,
      paragraphOne,
      headerThree,
      SubHeaderThree,
      paragraphTwo,
      headerFour,
      SubHeaderFour,
      paragraphThree,
      headerFive,
      SubHeaderFive,
      paragraphFour,
      headerSix,
      SubHeaderSix,
      paragraphFive,
      headerSeven,
      SubHeaderSeven,
      paragraphSix
    })

    res.status(200).json({ status: 200, message: "ServiceSubCategory Created Successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.stack });
  }
};

async function getAllServiceSubCategories(req, res) {
  try {
    const serviceSubCategories = await serviceSubCategory.find().populate('serviceCategoryId', 'name').sort({ createdAt: -1 });
    res.status(200).json({ status: 200, message: "ServiceSubCategory Get Successfully", serviceSubCategories });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

async function getServiceSubCategoryById(req, res) {
  try {
    const serviceSubCategoryData = await serviceSubCategory.findById(req.params.id).populate('serviceCategoryId', 'name');
    if (!serviceSubCategoryData) {
      return res.status(404).json({ status: 404, message: 'Service subcategory not found' });
    }
    res.status(200).json({ status: 200, message: "Services Get Successfully", serviceSubCategoryData });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

async function updateServiceSubCategory(req, res) {
  try {
    const {
      serviceCategoryId,
      name,
      image,
      headerOne,
      headerTwo,
      SubHeaderTwo,
      paragraphOne,
      headerThree,
      SubHeaderThree,
      paragraphTwo,
      headerFour,
      SubHeaderFour,
      paragraphThree,
      headerFive,
      SubHeaderFive,
      paragraphFour,
      headerSix,
      SubHeaderSix,
      paragraphFive,
      headerSeven,
      SubHeaderSeven,
      paragraphSix,
      _id
    } = req.body;

    if (serviceCategoryId) {
      const categoryExists = await serviceCategory.findById({ _id: serviceCategoryId });
      if (!categoryExists) {
        return res.status(400).json({ status: 400, message: 'Invalid service category ID' });
      }
    }
    const serviceSubCategoryData = await serviceSubCategory.findByIdAndUpdate(
      { _id: _id },
      {
        serviceCategoryId,
        name,
        image,
        headerOne,
        headerTwo,
        SubHeaderTwo,
        paragraphOne,
        headerThree,
        SubHeaderThree,
        paragraphTwo,
        headerFour,
        SubHeaderFour,
        paragraphThree,
        headerFive,
        SubHeaderFive,
        paragraphFour,
        headerSix,
        SubHeaderSix,
        paragraphFive,
        headerSeven,
        SubHeaderSeven,
        paragraphSix
      },
      { new: true }
    );

    if (!serviceSubCategoryData) {
      return res.status(404).json({ status: 404, message: 'Service subcategory not found' });
    }
    res.status(200).json({ status: 200, message: "SubService Created Successfully", response: serviceSubCategoryData });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

// Delete a service subcategory
async function deleteServiceSubCategory(req, res) {
  try {
    const serviceSubCategoryData = await serviceSubCategory.findByIdAndDelete(req.body._id);
    if (!serviceSubCategoryData) {
      return res.status(404).json({ status: 404, message: 'Service subcategory not found' });
    }
    res.status(200).json({ status: 200, message: 'Service subcategory deleted' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};


module.exports = { createServiceSubCategory, getAllServiceSubCategories, getServiceSubCategoryById, updateServiceSubCategory, deleteServiceSubCategory }
const serviceSubCategory = require('../models/serviceSubCategoryModel');
const serviceCategory = require('../models/serviceCategoryModel');

async function createServiceSubCategory(req, res) {
  try {
    const {
      serviceCategoryId,
      name,
      headerOne,
      headerTwo,
      SubHeaderTwo,
      paragraphOne,
      headerThree,
      SubHeaderThree,
      paragraphTwo,
      headerFour,
      SubHeaderFour,
      paragraphThree,
      headerFive,
      SubHeaderFive,
      paragraphFour,
      headerSix,
      SubHeaderSix,
      paragraphFive,
      headerSeven,
      SubHeaderSeven,
      paragraphSix
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ status: 400, message: "Image is required" });
    }
    const imageUrl = `http://localhost:3500/uploads/${req.file.filename}`;
    if (!serviceCategoryId || !name) {
      return res.status(400).json({ status: 400, message: 'Service category ID and name are required' });
    }
    const categoryExists = await serviceCategory.findById({ _id: serviceCategoryId });
    console.log("here")
    console.log(categoryExists, "categoryExists")
    if (!categoryExists) {
      return res.status(400).json({ status: 400, message: 'Invalid service category ID' });
    }

    await serviceSubCategory.create({
      serviceCategoryId,
      name,
      image: imageUrl,
      headerOne,
      headerTwo,
      SubHeaderTwo,
      paragraphOne,
      headerThree,
      SubHeaderThree,
      paragraphTwo,
      headerFour,
      SubHeaderFour,
      paragraphThree,
      headerFive,
      SubHeaderFive,
      paragraphFour,
      headerSix,
      SubHeaderSix,
      paragraphFive,
      headerSeven,
      SubHeaderSeven,
      paragraphSix
    })

    res.status(200).json({ status: 200, message: "ServiceSubCategory Created Successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.stack });
  }
};

async function getAllServiceSubCategories(req, res) {
  try {
    const serviceSubCategories = await serviceSubCategory.find().populate('serviceCategoryId', 'name').sort({ createdAt: -1 });
    res.status(200).json({ status: 200, message: "ServiceSubCategory Get Successfully", serviceSubCategories });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

async function getServiceSubCategoryById(req, res) {
  try {
    const serviceSubCategoryData = await serviceSubCategory.findById(req.params.id).populate('serviceCategoryId', 'name');
    if (!serviceSubCategoryData) {
      return res.status(404).json({ status: 404, message: 'Service subcategory not found' });
    }
    res.status(200).json({ status: 200, message: "Services Get Successfully", serviceSubCategoryData });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

async function updateServiceSubCategory(req, res) {
  try {
    const {
      serviceCategoryId,
      name,
      image,
      headerOne,
      headerTwo,
      SubHeaderTwo,
      paragraphOne,
      headerThree,
      SubHeaderThree,
      paragraphTwo,
      headerFour,
      SubHeaderFour,
      paragraphThree,
      headerFive,
      SubHeaderFive,
      paragraphFour,
      headerSix,
      SubHeaderSix,
      paragraphFive,
      headerSeven,
      SubHeaderSeven,
      paragraphSix,
      _id
    } = req.body;

    if (serviceCategoryId) {
      const categoryExists = await serviceCategory.findById({ _id: serviceCategoryId });
      if (!categoryExists) {
        return res.status(400).json({ status: 400, message: 'Invalid service category ID' });
      }
    }
    const serviceSubCategoryData = await serviceSubCategory.findByIdAndUpdate(
      { _id: _id },
      {
        serviceCategoryId,
        name,
        image,
        headerOne,
        headerTwo,
        SubHeaderTwo,
        paragraphOne,
        headerThree,
        SubHeaderThree,
        paragraphTwo,
        headerFour,
        SubHeaderFour,
        paragraphThree,
        headerFive,
        SubHeaderFive,
        paragraphFour,
        headerSix,
        SubHeaderSix,
        paragraphFive,
        headerSeven,
        SubHeaderSeven,
        paragraphSix
      },
      { new: true }
    );

    if (!serviceSubCategoryData) {
      return res.status(404).json({ status: 404, message: 'Service subcategory not found' });
    }
    res.status(200).json({ status: 200, message: "SubService Created Successfully", response: serviceSubCategoryData });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};

// Delete a service subcategory
async function deleteServiceSubCategory(req, res) {
  try {
    const serviceSubCategoryData = await serviceSubCategory.findByIdAndDelete(req.body._id);
    if (!serviceSubCategoryData) {
      return res.status(404).json({ status: 404, message: 'Service subcategory not found' });
    }
    res.status(200).json({ status: 200, message: 'Service subcategory deleted' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Server error', error: error.message });
  }
};


module.exports = { createServiceSubCategory, getAllServiceSubCategories, getServiceSubCategoryById, updateServiceSubCategory, deleteServiceSubCategory }
