const postJob = require('../models/postJobModel');
const Joi = require('joi');

 async function createPostJob(req, res)  {
  try {
    if (!req.file) {
      return res.status(400).json({ status: 400, message: 'Image is required' });
    }

 const Result = await upload(req.file);
image = Result.Location;    const postJobData = { ...req.body, image };

    const schema = Joi.object({
      job: Joi.string().trim().min(2).max(100).required(),
      department: Joi.string().trim().min(2).max(100).optional(),
      jobType: Joi.string().trim().min(2).max(100).optional(),
      location: Joi.string().trim().min(2).max(100).optional(),
      payScale: Joi.string().trim().min(2).max(100).optional(),
      image: Joi.string().uri().required(),
      headerOne: Joi.string().trim().min(2).max(200).optional(),
      headerTwo: Joi.string().trim().min(2).max(200).optional(),
    });

    const { error, value } = schema.validate(postJobData);
    if (error) {
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }

    const newPostJob = new postJob(value);
    await newPostJob.save();

    res.status(200).json({
      status: 200,
      message: 'Job Posted Successfully',
      response: newPostJob,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error creating job post',
      error: error.message,
    });
  }
};

  async function getAllPostJobs(req, res)  {
  try {
    const postJobs = await postJob.find().sort({createdAt:-1});
    res.status(200).json({
      status: 200,
      message: 'Job posts retrieved successfully',
      response: postJobs,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error',
      error: error.message,
    });
  }
};

  async function getPostJobById(req, res)  {
  try {
    const postJobData = await postJob.findById(req.params._id);
    if (!postJobData) {
      return res.status(404).json({
        status: 404,
        message: 'Job post not found',
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Job post retrieved successfully',
      response: postJobData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error',
      error: error.message,
    });
  }
};

  

  async function updatePostJob(req, res)  {
  try {
   const {job,department,jobType,location,payScale,headerOne,headerTwo,_id}=req.body;
   const postJobData = await postJob.findByIdAndUpdate({_id:_id}, {job,department,jobType,location,payScale,headerOne,headerTwo,...(req.file && {image: `http://localhost:3500/uploads/${req.file.filename}`} )}, {
      new: true,
     });

    if (!postJobData) {
      return res.status(404).json({
        status: 404,
        message: 'Job post not found',
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Job post updated successfully',
      response: postJobData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error updating job post',
      error: error.message,
    });
  }
};

  async function deletePostJob(req, res)  {
  try {
    const postJobData = await postJob.findByIdAndDelete(req.body._id);
    if (!postJobData) {
      return res.status(404).json({
        status: 404,
        message: 'Job post not found',
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Job post deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error',
      error: error.message,
    });
  }
};

module.exports={createPostJob,getAllPostJobs,getPostJobById,updatePostJob,deletePostJob}

