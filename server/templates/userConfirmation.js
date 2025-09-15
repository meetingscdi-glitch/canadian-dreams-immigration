async function userConfirmationTemplate(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - CanadaDreamImmigration</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #f0f4f8; /* Changed to a soft blue-gray for more color */
      margin: 0;
      padding: 10px;
      color: #333;
      line-height: 1.5;
    }
    
    .container {
      max-width: 580px;
      margin: 0 auto;
      background: #f0f4f8; /* Changed to match body background for consistency */
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* Increased shadow for more depth */
    }
    
    .header {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      padding: 20px;
      text-align: center;
      border-bottom: 3px solid #f59e0b;
    }
    
    .logo {
      color: white;
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 0.5px;
      margin: 0;
      text-transform: uppercase;
    }
    
    .tagline {
      color: rgba(255, 255, 255, 0.85);
      font-size: 13px;
      font-weight: 300;
      margin: 5px 0 0;
    }
    
    .content {
      padding: 20px;
    }
    
    .greeting {
      font-size: 16px;
      color: #1e3a8a;
      margin-bottom: 15px;
      font-weight: 600;
    }
    
    .thank-you {
      background: #eff6ff;
      border-left: 3px solid #f59e0b;
      padding: 15px;
      margin: 15px 0;
      border-radius: 6px;
    }
    
    .thank-you h2 {
      color: #1e3a8a;
      margin: 0 0 10px;
      font-size: 22px;
      font-weight: 700;
    }
    
    .message {
      color: #374151;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    
    .contact-info {
      background: #1e3a8a;
      color: white;
      padding: 15px;
      border-radius: 6px;
      margin: 15px 0;
    }
    
    .contact-info h3 {
      margin: 0 0 10px;
      color: #f59e0b;
      font-size: 16px;
      font-weight: 600;
    }
    
    .contact-details {
      font-size: 13px;
      line-height: 1.6;
    }
    
    .contact-details a {
      color: #f59e0b;
      text-decoration: none;
    }
    
    .footer {
      background: #1e3a8a;
      padding: 15px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
    }
    
    .signature {
      color: #374151;
      font-size: 13px;
      margin-top: 15px;
      text-align: center;
    }
    
    @media (max-width: 600px) {
      .content {
        padding: 15px;
      }
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
        <h2>Thank You for Your Inquiry!</h2>
        <p class="message">
          We have successfully received your inquiry and appreciate you choosing CanadaDreamImmigration for your Canadian immigration journey.
        </p>
        <p class="message">
          Our team will contact you within 48 hours to discuss your needs in detail.
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
      
      <p class="signature">
        Thank you for trusting CanadaDreamImmigration. We look forward to assisting you!
      </p>
    </div>
    
    <div class="footer">
      © 2025 CanadaDreamImmigration Consulting Inc. All rights reserved.
    </div>
  </div>
</body>
</html>`;
}

module.exports = { userConfirmationTemplate };