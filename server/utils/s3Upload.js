const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();


const upload = async (file) => {
  try {
    
    const uploadParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Body: file.buffer,
      Key: file.originalname,
      contentType: file.mimetype || "application/pdf",
    };
     return new Promise((resolve, reject) => {
      s3.upload(uploadParams, (err, data) => {
        if (err) {
          reject(err.message);
        }
        resolve(data);
      });
    });
  } catch (err) {
    throw err;
  }
};

 
const uploadDocument = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: Date.now().toString() + '-' + file.originalname,
    Body: file.buffer,
    ACL: 'public-read',
    ContentType: file.mimetype
  };
  
  try {
    const result = await s3.upload(params).promise();
    return result;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

const deleteFromS3 = async (fileKey) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileKey
  };
  
  try {
    await s3.deleteObject(params).promise();
    return true;
  } catch (error) {
    console.error('Error deleting file from S3:', error);
    return false;
  }
};

module.exports = { upload, uploadDocument, deleteFromS3 };