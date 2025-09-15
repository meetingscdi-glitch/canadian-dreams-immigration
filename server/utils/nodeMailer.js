const nodemailer = require('nodemailer');
const { ownerNotificationTemplate } = require('../templates/ownerNotification');
const { userConfirmationTemplate } = require('../templates/userConfirmation');  

const sendEmail = async (data, emailType ) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,  
    },
  });

  let htmlContent, subject, recipient;
  
  if (emailType == 'user') {
    htmlContent = await userConfirmationTemplate(data);
    subject = 'Thank you for contacting CanadaDreamImmigration';
    recipient = data.email;
  } else {
    htmlContent = await ownerNotificationTemplate(data);
    subject = 'New Contact Inquiry - CanadaDreamImmigration';
    recipient =process.env.EMAIL_USER;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: recipient,  
    subject: subject,
    html: htmlContent
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;