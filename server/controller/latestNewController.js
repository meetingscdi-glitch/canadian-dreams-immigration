const latestNews = require('../models/latestNewModel');
const Joi = require('joi');
const { upload } = require('../utils/s3Upload');

async function createLatestNews(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ status: 400, message: "Image is required" });
    }
     const Result = await upload(req.file);
let image = Result.Location;
     const latestNewsData = { ...req.body, image };

    const schema = Joi.object({
      heading: Joi.string().trim().min(3).max(100).required(),
      paragraph: Joi.string().trim().min(10).required(),
      image: Joi.string().uri().required()
    });

    const { error, value } = schema.validate(latestNewsData);
    if (error) {
      return res.status(400).json({ status: 400, message: error.message });
    }

    const newLatestNews = new latestNews(value);
    await newLatestNews.save();

    res.status(200).json({
      status: 200,
      message: "New Latest News Created Successfully",
      response: newLatestNews,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error creating latest news",
      error: error.message,
    });
  }
}

 const getAllLatestNews = async (req, res) => {
  try {
    const latestNewss = await latestNews.find().sort({ createdAt: -1 });
    res.status(200).json({ status: 200, message: "Latest news fetched successfully", response: latestNewss });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Error fetching latest news' });
  }
};

 const getLatestNewsById = async (req, res) => {
  try {
    const singleLatestNews = await latestNews.findById(req.params.id);
    if (!singleLatestNews) {
      return res.status(404).json({ status: 404, message: "Latest news not found" });
    }
    res.status(200).json({ status: 200, message: "Latest news fetched successfully", response: singleLatestNews });
  } catch (error) {
    res.status(500).json({ status: 500, message: "Error fetching latest news", error: error.message });
  }
};

 const updateLatestNews = async (req, res) => {
  try {
    const { heading, paragraph, _id } = req.body;
    let imageUrl;
    if(req.file){
       const Result = await upload(req.file);
       imageUrl = Result.Location;
    }
    const updatedLatestNews = await latestNews.findByIdAndUpdate(
      _id,
      {
        heading,
        paragraph,
        ...(req.file && { image: imageUrl }),
      },
      { new: true }
    );

    if (!updatedLatestNews) {
      return res.status(404).json({ status: 404, message: "Latest news not found" });
    }

    res.status(200).json({
      status: 200,
      message: "Latest news updated successfully",
      response: updatedLatestNews,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error updating latest news",
      error: error.message,
    });
  }
};

 const deleteLatestNews = async (req, res) => {
  try {
    const { _id } = req.body;
    const deletedLatestNews = await latestNews.findByIdAndDelete(_id);
    if (!deletedLatestNews) {
      return res.status(404).json({ status: 404, message: 'Latest news not found' });
    }
    res.status(200).json({ status: 200, message: 'Latest news deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error deleting latest news', error });
  }
};

module.exports = {
  createLatestNews,
  getAllLatestNews,
  getLatestNewsById,
  updateLatestNews,
  deleteLatestNews,
};
