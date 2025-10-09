const nodemailer = require('nodemailer');

// Configure email transport (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use SendGrid, AWS SES, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

/**
 * Sends confirmation emails to user and admin.
 * @param {Object} calendlyEvent - Calendly event data (start_time, end_time, invitee, etc.).
 */
async function sendConfirmationEmails(calendlyEvent) {
  const meetingLink = calendlyEvent.join_url || calendlyEvent.uri || 'No meeting link provided';
  const startTime = new Date(calendlyEvent.start_time).toLocaleString();
  const endTime = new Date(calendlyEvent.end_time).toLocaleString();

  const emailContent = {
    user: {
      to: calendlyEvent.invitee.email,
      subject: `Meeting Scheduled: ${calendlyEvent.name || 'Your Meeting'}`,
      text: `
        Hi ${calendlyEvent.invitee.name},
        
        Your meeting is scheduled!
        - Date/Time: ${startTime} to ${endTime}
        - Meeting Link: ${meetingLink}
        
        You'll receive a calendar reminder separately.
        Thanks for booking!
      `,
      html: `
        <h2>Meeting Scheduled</h2>
        <p><strong>Date/Time:</strong> ${startTime} to ${endTime}</p>
        <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
        <p>Thanks for booking!</p>
      `,
    },
    admin: {
      to: process.env.ADMIN_EMAIL,
      subject: `New Meeting Scheduled with ${calendlyEvent.invitee.name}`,
      text: `
        A new meeting has been scheduled.
        - Invitee: ${calendlyEvent.invitee.name} (${calendlyEvent.invitee.email})
        - Date/Time: ${startTime} to ${endTime}
        - Meeting Link: ${meetingLink}
        
        This has been added to your Google Calendar.
      `,
      html: `
        <h2>New Meeting Scheduled</h2>
        <p><strong>Invitee:</strong> ${calendlyEvent.invitee.name} (${calendlyEvent.invitee.email})</p>
        <p><strong>Date/Time:</strong> ${startTime} to ${endTime}</p>
        <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
      `,
    },
  };

  try {
    // Send to user
    await transporter.sendMail(emailContent.user);
    console.log(`Email sent to user: ${calendlyEvent.invitee.email}`);
    // Send to admin
    await transporter.sendMail(emailContent.admin);
    console.log(`Email sent to admin: ${process.env.ADMIN_EMAIL}`);
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}

module.exports = { sendConfirmationEmails };