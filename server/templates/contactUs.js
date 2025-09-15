async function contactUsMailTemplate(data) {
    console.log('Generating email template with data:', data);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CanadaDreamImmigration - Contact Inquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');
    
    body {
      font-family: 'Source Sans Pro', sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 15px;
      color: #2d3748;
      line-height: 1.5;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
    }
    
    .header {
      background: linear-gradient(135deg, #1a365d 0%, #2a4365 100%);
      padding: 20px;
      text-align: center;
      border-bottom: 4px solid #d4af37;
    }
    
    .logo {
      color: white;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 26px;
      letter-spacing: 0.5px;
      margin: 0;
      text-transform: uppercase;
    }
    
    .tagline {
      color: rgba(255, 255, 255, 0.85);
      font-size: 14px;
      margin: 8px 0 0;
      font-weight: 300;
    }
    
    .content {
      padding: 25px;
    }
    
    h2 {
      font-family: 'Playfair Display', serif;
      color: #1a365d;
      margin-top: 0;
      font-size: 22px;
      font-weight: 600;
      padding-bottom: 10px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .notification {
      background-color: #f8fafc;
      border-left: 3px solid #d4af37;
      padding: 12px 15px;
      margin: 15px 0;
      border-radius: 3px;
      font-size: 14px;
    }
    
    .inquiry-details {
      background-color: #f8fafc;
      border-radius: 6px;
      padding: 15px;
      margin: 15px 0;
      border: 1px solid #e2e8f0;
    }
    
    .detail-row {
      display: flex;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px dashed #e2e8f0;
    }
    
    .detail-row:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    
    .detail-label {
      font-weight: 600;
      color: #4a5568;
      width: 110px;
      flex-shrink: 0;
      font-size: 14px;
    }
    
    .detail-value {
      color: #2d3748;
      flex-grow: 1;
      font-size: 14px;
    }
    
    .message-container {
      background-color: #f8fafc;
      border-radius: 6px;
      padding: 15px;
      margin: 15px 0;
      border: 1px solid #e2e8f0;
    }
    
    .message-label {
      font-weight: 600;
      color: #4a5568;
      margin-bottom: 8px;
      display: block;
      font-size: 14px;
    }
    
    .message-content {
      background: white;
      padding: 12px;
      border-radius: 4px;
      border-left: 2px solid #d4af37;
      font-size: 14px;
    }
    
    .footer {
      background-color: #1a365d;
      padding: 20px 25px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 13px;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .company-info {
      flex: 2;
    }
    
    .company-name {
      font-weight: 600;
      color: white;
      margin-bottom: 5px;
      font-size: 14px;
    }
    
    .contact-info {
      margin-top: 10px;
      line-height: 1.6;
      font-size: 13px;
    }
    
    .contact-info a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
    }
    
    .contact-info a:hover {
      text-decoration: underline;
    }
    
    .branding {
      flex: 1;
      text-align: right;
      font-style: italic;
      font-weight: 300;
      font-size: 13px;
    }
    
    .copyright {
      text-align: center;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
    }
    
    @media (max-width: 600px) {
      .content, .footer {
        padding: 20px;
      }
      
      .header {
        padding: 15px;
      }
      
      .footer-content {
        flex-direction: column;
        text-align: center;
      }
      
      .branding {
        text-align: center;
        margin-top: 12px;
      }
      
      .detail-row {
        flex-direction: column;
      }
      
      .detail-label {
        width: 100%;
        margin-bottom: 3px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="logo">CanadaDreamImmigration</h1>
      <p class="tagline">Expert Canadian Immigration Consulting Services</p>
    </div>
    
    <div class="content">
      <h2>New Client Inquiry</h2>
      
      <div class="notification">
        You have received a new inquiry through your website. Please review the details below.
      </div>
      
      <div class="inquiry-details">
        <div class="detail-row">
          <div class="detail-label">First Name:</div>
          <div class="detail-value">${data.firstName || 'Not provided'}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Last Name:</div>
          <div class="detail-value">${data.lastName || 'Not provided'}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Email:</div>
          <div class="detail-value">${data.email || 'Not provided'}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Phone:</div>
          <div class="detail-value">${data.phoneNumber || 'Not provided'}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Inquiry Type:</div>
          <div class="detail-value">
            ${data.role === 'Employer' ? 'Employer' : (data.role === 'Aspirant' ? 'Immigration Aspirant' : 'Not specified')}
          </div>
        </div>
      </div>
      
      <div class="message-container">
        <span class="message-label">Client Message:</span>
        <div class="message-content">${data.message || 'No message provided'}</div>
      </div>
    </div>
    
    <div class="footer">
      <div class="footer-content">
        <div class="company-info">
          <div class="company-name">CanadaDreamImmigration Consulting Inc.</div>
          <div class="contact-info">
            Email: <a href="mailto:info@canadadreamimmigration.com">info@canadadreamimmigration.com</a><br>
            Phone: <a href="tel:+1-800-123-4567">+1 (800) 123-4567</a><br>
            Website: <a href="https://www.canadadreamimmigration.com">www.canadadreamimmigration.com</a>
          </div>
        </div>
        
        <div class="branding">
          Your Pathway to Canadian Immigration Success
        </div>
      </div>
      
      <div class="copyright">
        &copy; 2023 CanadaDreamImmigration Consulting Inc. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>`;

 }

async function userConfirmationTemplate(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - CanadaDreamImmigration</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');
    
    body {
      font-family: 'Source Sans Pro', sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 15px;
      color: #2d3748;
      line-height: 1.6;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
    }
    
    .header {
      background: linear-gradient(135deg, #1a365d 0%, #2a4365 100%);
      padding: 25px;
      text-align: center;
      border-bottom: 4px solid #d4af37;
    }
    
    .logo {
      color: white;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0.5px;
      margin: 0;
      text-transform: uppercase;
    }
    
    .tagline {
      color: rgba(255, 255, 255, 0.9);
      font-size: 15px;
      margin: 10px 0 0;
      font-weight: 300;
    }
    
    .content {
      padding: 30px;
    }
    
    .greeting {
      font-size: 18px;
      color: #1a365d;
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .thank-you {
      background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
      border-left: 4px solid #d4af37;
      padding: 20px;
      margin: 20px 0;
      border-radius: 6px;
    }
    
    .thank-you h2 {
      font-family: 'Playfair Display', serif;
      color: #1a365d;
      margin: 0 0 15px;
      font-size: 24px;
    }
    
    .message {
      color: #4a5568;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    .next-steps {
      background-color: #f8fafc;
      border-radius: 6px;
      padding: 20px;
      margin: 25px 0;
      border: 1px solid #e2e8f0;
    }
    
    .next-steps h3 {
      font-family: 'Playfair Display', serif;
      color: #1a365d;
      margin: 0 0 15px;
      font-size: 20px;
    }
    
    .steps-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .steps-list li {
      padding: 8px 0;
      border-bottom: 1px dashed #e2e8f0;
      color: #4a5568;
    }
    
    .steps-list li:last-child {
      border-bottom: none;
    }
    
    .contact-info {
      background-color: #1a365d;
      color: white;
      padding: 20px;
      border-radius: 6px;
      margin: 25px 0;
    }
    
    .contact-info h3 {
      margin: 0 0 15px;
      color: #d4af37;
      font-family: 'Playfair Display', serif;
    }
    
    .contact-details {
      font-size: 14px;
      line-height: 1.8;
    }
    
    .contact-details a {
      color: #d4af37;
      text-decoration: none;
    }
    
    .footer {
      background-color: #1a365d;
      padding: 20px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      font-size: 13px;
    }
    
    .footer-note {
      margin-bottom: 10px;
    }
    
    .copyright {
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="logo">CanadaDreamImmigration</h1>
      <p class="tagline">Your Pathway to Canadian Immigration Success</p>
    </div>
    
    <div class="content">
      <div class="greeting">Dear ${data.firstName} ${data.lastName},</div>
      
      <div class="thank-you">
        <h2>Thank You for Reaching Out!</h2>
        <p class="message">
          We have successfully received your inquiry and truly appreciate you considering CanadaDreamImmigration for your Canadian immigration journey.
        </p>
        <p class="message">
          We will reach out to you within 48 hours to discuss your immigration needs.
        </p>
      </div>
      

      
      <div class="contact-info">
        <h3>Need Immediate Assistance?</h3>
        <div class="contact-details">
          📧 Email: <a href="mailto:info@canadadreamimmigration.com">info@canadadreamimmigration.com</a><br>
          📞 Phone: <a href="tel:+1-800-123-4567">+1 (800) 123-4567</a><br>
          🌐 Website: <a href="https://www.canadadreamimmigration.com">www.canadadreamimmigration.com</a>
        </div>
      </div>
      
      <p style="color: #4a5568; font-size: 14px; margin-top: 25px;">
        Thank you for choosing CanadaDreamImmigration. We look forward to helping you achieve your Canadian immigration dreams!
      </p>
    </div>
    
    <div class="footer">
      <div class="footer-note">
        This is an automated confirmation email. Please do not reply to this message.
      </div>
      <div class="copyright">
        © 2023 CanadaDreamImmigration Consulting Inc. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>`;
}

module.exports = { contactUsMailTemplate, userConfirmationTemplate };
