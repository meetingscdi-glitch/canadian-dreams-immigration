async function ownerNotificationTemplate(data) {
  return  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CanadaDreamImmigration - Contact Inquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    
    body {
      font-family: 'Roboto', sans-serif;
      background: linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%);
      margin: 0;
      padding: 10px;
      color: #333;
      line-height: 1.5;
    }
    
    .container {
      max-width: 580px;
      margin: 0 auto;
      background: white;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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
    
    h2 {
      color: #1e3a8a;
      margin: 0 0 15px;
      font-size: 22px;
      font-weight: 700;
      text-align: center;
    }
    
    .notification {
      background: #eff6ff;
      border-left: 3px solid #3b82f6;
      padding: 12px 15px;
      margin: 0;
      border-radius: 6px;
      font-size: 14px;
      color: #1e40af;
    }
    
    .client-card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 15px;
      margin: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
      position: relative;
    }
    
    .client-card::before {
      content: '👤';
      position: absolute;
      top: -8px;
      left: 15px;
      background: white;
      padding: 0 6px;
      font-size: 16px;
    }
    
    .card-title {
      color: #1e3a8a;
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 15px;
      padding-left: 25px;
    }
    
    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 15px;
    }
    
    .detail-item {
      background: #f9fafb;
      padding: 10px;
      border-radius: 5px;
      border-left: 2px solid #f59e0b;
    }
    
    .detail-label {
      font-weight: 600;
      color: #4b5563;
      font-size: 11px;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    
    .detail-value {
      color: #111827;
      font-size: 13px;
      font-weight: 500;
    }
    
    .inquiry-type {
      grid-column: 1 / -1;
      background: #f1f5f9;
      border-left-color: #3b82f6;
    }
    
    .message-section {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 15px;
      margin: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
      position: relative;
    }
    
    .message-section::before {
      content: '💬';
      position: absolute;
      top: -8px;
      left: 15px;
      background: white;
      padding: 0 6px;
      font-size: 16px;
    }
    
    .message-title {
      color: #1e3a8a;
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 10px;
      padding-left: 25px;
    }
    
    .message-content {
      background: #f9fafb;
      padding: 15px;
      border-radius: 6px;
      border-left: 3px solid #f59e0b;
      font-size: 14px;
      line-height: 1.5;
      color: #374151;
    }
    
    .action-footer {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      color: white;
      padding: 15px;
      border-radius: 6px;
      margin: 0;
      text-align: center;
    }
    
    .action-text {
      font-size: 13px;
      margin: 0;
      opacity: 0.9;
    }
    
    @media (max-width: 600px) {
      .detail-grid {
        grid-template-columns: 1fr;
      }
      
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
      <p class="tagline">Professional Immigration Consulting Services</p>
    </div>
    
    <div class="content">
      <div class="notification">
        📧 A new inquiry has been submitted through your website. Please review the client details and respond promptly.
      </div>
      <div class="client-card">
        <div class="card-title">Client Information</div>
        <div class="detail-grid">
          <div class="detail-item">
            <div class="detail-label">First Name</div>
            <div class="detail-value">${data.firstName || 'Not provided'}</div>
          </div>
          
          <div class="detail-item">
            <div class="detail-label">Last Name</div>
            <div class="detail-value">${data.lastName || 'Not provided'}</div>
          </div>
          
          <div class="detail-item">
            <div class="detail-label">Email Address</div>
            <div class="detail-value">${data.email || 'Not provided'}</div>
          </div>
          
          <div class="detail-item">
            <div class="detail-label">Phone Number</div>
            <div class="detail-value">${data.phoneNumber || 'Not provided'}</div>
          </div>
          
          <div class="detail-item inquiry-type">
            <div class="detail-label">Inquiry Category</div>
            <div class="detail-value">
              ${data.role === 'Employer' ? '🏢 Employer Services' : (data.role === 'Aspirant' ? '🇨🇦 Immigration Aspirant' : 'Not specified')}
            </div>
          </div>
        </div>
      </div>
      <div class="message-section">
        <div class="message-title">Client Message</div>
        <div class="message-content">${data.message || 'No message provided'}</div>
      </div>
      <div class="action-footer">
        <p class="action-text">⏰ Recommended response time: Within 24 hours for optimal client satisfaction</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

module.exports = { ownerNotificationTemplate };