const axios = require('axios');
const { createEvent } = require('../utils/googleCalendar');
const { sendConfirmationEmails } = require('../utils/email');
const Meeting = require('../models/meetingModel');

const CALENDLY_API = 'https://api.calendly.com';
const TOKEN = process.env.CALENDLY_TOKEN;

const calendly = axios.create({
  baseURL: CALENDLY_API,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
});

 
async function getMe(req, res) {
  try {
    const response = await calendly.get('/users/me');
    res.status(200).json({ status: 200, message: 'User data retrieved successfully', data: response.data });
  } catch (error) {
    console.error('Error getting user data:', error);
    res.status(500).json({ status: 500, message: 'Server error' });
  }
}

async function getEventTypes(req, res) {
  try {
    const me = await calendly.get('/users/me');
    console.log(me,"me")
    const userUri = me.data.resource.uri;
    console.log(userUri,"userUri")
    const response = await calendly.get('/event_types', {
      params: { user: userUri },
    });

    res.status(200).json({ status: 200, message: 'Event types retrieved successfully', data: response.data });
  } catch (error) {
    console.error('Error getting event types:', error);
    res.status(500).json({ status: 500, message: 'Server error' });
  }
};

async function getEventTypeDuration(eventTypeUri) {
  const response = await calendly.get(`/event_types/${eventTypeUri.split('/').pop()}`);
  return response.data.resource.duration; // e.g., "30" (minutes)
}

async function getSlots(req, res) {
  try {
    const { eventTypeUri, startTime, endTime } = req.query;

    if (!eventTypeUri || !startTime || !endTime) {
      return res.status(400).json({ status: 400, message: 'Event type URI, start time, and end time are required' });
    }

    const start = new Date(startTime);
    const end = new Date(endTime);
    const now = new Date();

    let adjustedStartTime = startTime;
    if (start < now) {
      const adjustedStart = new Date(now);
      adjustedStart.setMinutes(0, 0, 0);
      adjustedStartTime = adjustedStart.toISOString();
      console.warn('Start time adjusted to current time:', adjustedStartTime);
    }

    let adjustedEndTime = endTime;
    const adjustedStart = new Date(adjustedStartTime);
    if (end <= adjustedStart) {
      const adjustedEnd = new Date(adjustedStart);
      adjustedEnd.setDate(adjustedStart.getDate() + 1);
      adjustedEndTime = adjustedEnd.toISOString();
      console.warn('End time adjusted to minimum range:', adjustedEndTime);
    }
    const maxRange = new Date(adjustedStart);
    maxRange.setDate(adjustedStart.getDate() + 30);
    if (end > maxRange) {
      adjustedEndTime = maxRange.toISOString();
      console.warn('End time adjusted to max range:', adjustedEndTime);
    }

    const response = await calendly.get('/event_type_available_times', {
      params: {
        event_type: eventTypeUri,
        start_time: adjustedStartTime,
        end_time: adjustedEndTime,
      },
    });

    const duration = await getEventTypeDuration(eventTypeUri);
    const slotsWithEndTime = (response.data.collection || []).map(slot => ({
      ...slot,
      end_time: new Date(new Date(slot.start_time).getTime() + duration * 60000).toISOString(), // Add 30 minutes (adjust if duration varies)
    }));

    console.log('Slots with end times:', slotsWithEndTime);
    res.status(200).json({
      status: 200,
      message: 'Available slots retrieved successfully',
      response:  slotsWithEndTime ,
    });
  } catch (error) {
    console.error('Error getting slots:', error.response ? error.response.data : error.message);
    if (error.response && error.response.status === 400) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid request parameters. Please ensure the date range is valid and in the future.',
        details: error.response.data.details || 'No additional details provided',
      });
    }
    res.status(500).json({ status: 500, message: 'Server error' });
  }
}

// async function getSlots(req, res) {
//   try {
//     const { eventTypeUri, startTime, endTime } = req.query;

//     // Validate required parameters
//     if (!eventTypeUri || !startTime || !endTime) {
//       return res.status(400).json({ status: 400, message: 'Event type URI, start time, and end time are required' });
//     }

//     // Convert to Date objects for validation
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     const now = new Date();
// console.log(start,end)
//     // Adjust start time to be at least now if in the past
//     let adjustedStartTime = startTime;
//     if (start < now) {
//       const adjustedStart = new Date(now);
//       adjustedStart.setMinutes(0, 0, 0); // Round to the start of the current hour
//       adjustedStartTime = adjustedStart.toISOString();
//       console.warn('Start time adjusted to current time:', adjustedStartTime);
//     }

//     // Ensure end time is after start time and within a reasonable range (e.g., 30 days)
//     let adjustedEndTime = endTime;
//     const adjustedStart = new Date(adjustedStartTime);
//     if (end <= adjustedStart) {
//       const adjustedEnd = new Date(adjustedStart);
//       adjustedEnd.setDate(adjustedStart.getDate() + 1); // Minimum 1 day range
//       adjustedEndTime = adjustedEnd.toISOString();
//       console.warn('End time adjusted to minimum range:', adjustedEndTime);
//     }
//     const maxRange = new Date(adjustedStart);
//     maxRange.setDate(adjustedStart.getDate() + 30); // Max 30 days range
//     if (end > maxRange) {
//       adjustedEndTime = maxRange.toISOString();
//       console.warn('End time adjusted to max range:', adjustedEndTime);
//     }

//     const response = await calendly.get('/event_type_available_times', {
//       params: {
//         event_type: eventTypeUri,
//         start_time: adjustedStartTime,
//         end_time: adjustedEndTime,
//       },
//     });

//     // Return the response, even if no slots are available
//     res.status(200).json({
//       status: 200,
//       message: 'Available slots retrieved successfully',
//       data: response.data.collection || [], // Ensure data.collection exists
//     });
//   } catch (error) {
//     console.error('Error getting slots:', error.response ? error.response.data : error.message);
//     if (error.response && error.response.status === 400) {
//       return res.status(400).json({
//         status: 400,
//         message: 'Invalid request parameters. Please ensure the date range is valid and in the future.',
//         details: error.response.data.details || 'No additional details provided',
//       });
//     }
//     res.status(500).json({ status: 500, message: 'Server error' });
//   }
// }

// async function getSlots(req, res) {
//   try {
//     const { eventTypeUri, startTime, endTime } = req.query;

//     // Validate required parameters
//     if (!eventTypeUri || !startTime || !endTime) {
//       return res.status(400).json({ status: 400, message: 'Event type URI, start time, and end time are required' });
//     }

//     // Convert to Date objects for validation
//     let start = new Date(startTime);
//     let end = new Date(endTime);
//     let now = new Date();

//     // Adjust start time to be at least now if in the past
//     if (start < now) {
//       start.setTime(now.getTime()); // Set to current time
//       startTime = start.toISOString();
//       console.warn('Start time adjusted to current time:', startTime);
//     }

//     // Ensure end time is after start time and within a reasonable range (e.g., 30 days)
//     if (end <= start) {
//       return res.status(400).json({ status: 400, message: 'End time must be after start time' });
//     }
//     let maxRange = new Date(start);
//     maxRange.setDate(start.getDate() + 30); // Max 30 days range
//     if (end > maxRange) {
//       end = maxRange;
//       endTime = end.toISOString();
//       console.warn('End time adjusted to max range:', endTime);
//     }

//     let response = await calendly.get('/event_type_available_times', {
//       params: {
//         event_type: eventTypeUri,
//         start_time: startTime,
//         end_time: endTime,
//       },
//     });

//     // Return the response, even if no slots are available
//     res.status(200).json({
//       status: 200,
//       message: 'Available slots retrieved successfully',
//       response: response.data.collection || [], // Ensure data.collection exists
//     });
//   } catch (error) {
//     console.error('Error getting slots:', error.response ? error.response.data : error.message);
//     if (error.response && error.response.status === 400) {
//       return res.status(400).json({
//         status: 400,
//         message: 'Invalid request parameters. Please ensure the date range is valid and in the future.',
//         details: error.response.data.details || 'No additional details provided',
//       });
//     }
//     res.status(500).json({ status: 500, message: 'Server error' });
//   }
// }

// async function getSlots(req, res) {
//   try {
//     const { eventTypeUri, startTime, endTime } = req.query;

//     if (!eventTypeUri || !startTime || !endTime) {
//       return res.status(400).json({ status: 400, message: 'Event type URI, start time, and end time are required' });
//     }

//     const response = await calendly.get('/event_type_available_times', {
//       params: {
//         event_type: eventTypeUri,
//         start_time: startTime,
//         end_time: endTime,
//       },
//     });

//     res.status(200).json({ status: 200, message: 'Available slots retrieved successfully', data: response.data });
//   } catch (error) {
//     console.error('Error getting slots:', error);
//     res.status(500).json({ status: 500, message: 'Server error' });
//   }
// }

// async function scheduleMeeting(req, res) {
//   try {
//     const { eventTypeUri, invitee, startTime, endTime } = req.body;

//     if (!eventTypeUri || !invitee?.email || !invitee?.name || !startTime || !endTime) {
//       return res.status(400).json({ status: 400, message: 'Event type URI, invitee details, start time, and end time are required' });
//     }

//     // Schedule in Calendly
//     const response = await calendly.post('/scheduled_events', {
//       event_type: eventTypeUri,
//       invitee: {
//         email: invitee.email,
//         name: invitee.name,
//       },
//       start_time: startTime,
//       end_time: endTime,
//     });

//     const calendlyEvent = response.data.resource;

//     // Save to MongoDB
//     try {
//       const meeting = new Meeting({
//         eventTypeUri,
//         eventName: calendlyEvent.name || 'Scheduled Meeting',
//         invitee: {
//           name: invitee.name,
//           email: invitee.email,
//         },
//         startTime: new Date(startTime),
//         endTime: new Date(endTime),
//         meetingLink: calendlyEvent.join_url || calendlyEvent.uri || 'No meeting link provided',
//         calendlyEventUri: calendlyEvent.uri,
//       });
//       await meeting.save();
//       console.log('Meeting saved to MongoDB:', meeting._id);
//     } catch (dbError) {
//       console.error('Failed to save meeting to MongoDB, but booking succeeded:', dbError);
//     }

//     // Send confirmation emails to user and admin
//     try {
//       await sendConfirmationEmails(calendlyEvent);
//     } catch (emailError) {
//       console.error('Email sending failed, but booking succeeded:', emailError);
//     }

//     // Add to admin’s Google Calendar
//     try {
//       const adminGoogleEvent = await createEvent(calendlyEvent);
//       console.log('Synced to admin’s Google Calendar:', adminGoogleEvent.id);
//     } catch (adminGoogleError) {
//       console.error('Admin Google Calendar sync failed, but booking succeeded:', adminGoogleError);
//     }

//     res.status(200).json({
//       status: 200,
//       message: 'Meeting scheduled successfully, saved to database, emails sent, and synced to admin’s Google Calendar',
//       data: {
//         calendlyEvent: response.data,
//       },
//     });
//   } catch (error) {
//     console.error('Error scheduling meeting:', error);
//     res.status(500).json({ status: 500, message: 'Server error' });
//   }
// }

// async function scheduleMeeting(req, res) {
//   try {
//     const { eventTypeUri, invitee, startTime, endTime } = req.body;

//     if (!eventTypeUri || !invitee?.name || !invitee?.email || !startTime || !endTime) {
//       return res.status(400).json({ status: 400, message: 'All fields (event type URI, invitee name, email, start time, end time) are required' });
//     }

//     // Create invitee via Calendly API
//     const inviteeResponse = await calendly.post('/invitee', {
//       uri: eventTypeUri, // Should be the event type URI, e.g., https://api.calendly.com/event_types/...
//       email: invitee.email,
//       name: invitee.name,
//       scheduling: {
//         start_time: startTime,
//         end_time: endTime,
//       },
//     });

//     // Save to MongoDB
//     const meeting = new Meeting({
//       eventTypeUri,
//       invitee,
//       startTime,
//       endTime,
//       calendlyInviteeUri: inviteeResponse.data.resource.uri, // Store the invitee URI
//       createdAt: new Date(),
//     });
//     await meeting.save();
//     console.log('Meeting saved to MongoDB:', meeting._id);

//     // Sync with Google Calendar
//     const calendarEvent = await createEvent({
//       name: invitee.name,
//       email: invitee.email,
//       start_time: startTime,
//       end_time: endTime,
//       uri: eventTypeUri,
//     });
//     console.log('Synced to admin’s Google Calendar:', calendarEvent.id);

//     // Send emails
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: invitee.email,
//       subject: 'Meeting Scheduled',
//       text: `Hi ${invitee.name},\n\nYour meeting is scheduled for ${new Date(startTime).toLocaleString()} - ${new Date(endTime).toLocaleString()}.`,
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: 'New Meeting Scheduled',
//       text: `A new meeting is scheduled with ${invitee.name} (${invitee.email}) from ${new Date(startTime).toLocaleString()} to ${new Date(endTime).toLocaleString()}.`,
//     });
//     console.log('Emails sent to user and admin');

//     res.status(200).json({ status: 200, message: 'Meeting scheduled successfully', data: meeting });
//   } catch (error) {
//     console.error('Error scheduling meeting:', error.response ? error.response.data : error.message);
//     if (error.response && error.response.status === 400) {
//       return res.status(400).json({
//         status: 400,
//         message: 'Invalid request parameters.',
//         details: error.response.data.details || 'No additional details provided',
//       });
//     }
//     res.status(500).json({ status: 500, message: 'Server error' });
//   }
// };



// async function scheduleMeeting(req, res) {
//   try {
//     const { eventTypeUri, invitee, startTime, endTime, schedulingUrl } = req.body;

//     if (!eventTypeUri || !invitee?.name || !invitee?.email || !startTime || !endTime || !schedulingUrl) {
//       return res.status(400).json({ status: 400, message: 'All fields (event type URI, invitee name, email, start time, end time, scheduling URL) are required' });
//     }

//     const eventTypeMatch = eventTypeUri.match(/event_types\/(.+)/);
//     const eventTypeId = eventTypeMatch ? eventTypeMatch[1] : eventTypeUri.split('/').pop();
//     console.log(eventTypeId,"eventTypeId")
//     const correctEventTypeUri = `https://api.calendly.com/event_types/${eventTypeId}`;

//     // Validate the slot (optional, already done in getSlots)
//     // Create scheduled event using scheduling_url
//     const schedulingResponse = await calendly.post('/scheduled_events', {
//       event_type: correctEventTypeUri,
//       invitee: {
//         email: invitee.email,
//         name: invitee.name,
//       },
//       scheduling_url: schedulingUrl, // Use the scheduling URL from the slot
//     });

//     const meeting = new Meeting({
//       eventTypeUri: correctEventTypeUri,
//       invitee,
//       startTime,
//       endTime,
//       calendlyEventUri: schedulingResponse.data.resource.uri,
//       createdAt: new Date(),
//     });
//     await meeting.save();
//     console.log('Meeting saved to MongoDB:', meeting._id);

//     const calendarEvent = await createEvent({
//       name: invitee.name,
//       email: invitee.email,
//       start_time: startTime,
//       end_time: endTime,
//       uri: correctEventTypeUri,
//     });
//     console.log('Synced to admin’s Google Calendar:', calendarEvent.id);

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: invitee.email,
//       subject: 'Meeting Scheduled',
//       text: `Hi ${invitee.name},\n\nYour meeting is scheduled for ${new Date(startTime).toLocaleString()} - ${new Date(endTime).toLocaleString()}.`,
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: 'New Meeting Scheduled',
//       text: `A new meeting is scheduled with ${invitee.name} (${invitee.email}) from ${new Date(startTime).toLocaleString()} to ${new Date(endTime).toLocaleString()}.`,
//     });
//     console.log('Emails sent to user and admin');

//     res.status(200).json({ status: 200, message: 'Meeting scheduled successfully', data: meeting });
//   } catch (error) {
//     console.error('Error scheduling meeting:', error.response ? error.response.data : error.message);
//     if (error.response && error.response.status === 400) {
//       return res.status(400).json({
//         status: 400,
//         message: 'Invalid request parameters.',
//         details: error.response.data.details || 'No additional details provided',
//       });
//     }
//     res.status(500).json({ status: 500, message: 'Server error' });
//   }
// }

// const createSchedulingLink = async (req, res) => {
//   try {
//     const { eventTypeUri } = req.body;
//     if (!eventTypeUri)
//       return res.status(400).json({ status: 400, message: "eventTypeUri is required" });

//     const response = await calendly.post("/scheduling_links", {
//       max_event_count: 1,
//       owner: eventTypeUri,
//     });

//     res.status(200).json({
//       status: 200,
//       message: "Scheduling link created successfully",
//       data: response.data.resource,
//     });
//   } catch (err) {
//     console.error("Error creating scheduling link:", err.response?.data || err.message);
//     res.status(500).json({
//       status: 500,
//       message: "Server error",
//       error: err.response?.data,
//     });
//   }
// };

const createSchedulingLink = async (req, res) => {
  try {
    const { eventTypeUri } = req.body;

    if (!eventTypeUri) {
      return res.status(400).json({ status: 400, message: "eventTypeUri is required" });
    }

    const response = await calendly.post("/scheduling_links", {
      max_event_count: 1,
      owner: eventTypeUri,
      owner_type: "EventType", // 🧠 THIS is what was missing
    });

    res.status(200).json({
      status: 200,
      message: "Scheduling link created successfully",
      data: response.data.resource,
    });
  } catch (err) {
    console.error("Error creating scheduling link:", err.response?.data || err.message);
    res.status(500).json({
      status: 500,
      message: "Server error",
      error: err.response?.data,
    });
  }
};


// 3️⃣ Webhook (called automatically by Calendly when event is booked)
// const handleWebhook = async (req, res) => {
//   try {
//     const event = req.body;

//     if (event.event !== "invitee.created") return res.sendStatus(200);

//     const invitee = event.payload.invitee;
//     const eventUri = event.payload.event.uri;
//     const startTime = event.payload.event.start_time;
//     const endTime = event.payload.event.end_time;

//     // Save meeting in DB
//    const data = {
//         eventTypeUri: payload.event_type.uri,
//         eventName: payload.event_type.name,
//         invitee: {
//           name: payload.invitee.name,
//           email: payload.invitee.email,
//         },
//         startTime: payload.event.start_time,
//         endTime: payload.event.end_time,
//         meetingLink: payload.event.uri,
//         calendlyEventUri: payload.event.uri,
//       };
//       const meeting = await Meeting.create(data);

//     // Send confirmation emails
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: invitee.email,
//       subject: "aman",
//       text: `Hey ${invitee.name}, your meeting is confirmed from ${new Date(
//         startTime
//       ).toLocaleString()} to ${new Date(endTime).toLocaleString()}.`,
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: "teste",
//       text: `New meeting with ${invitee.name} (${invitee.email}) from ${startTime} to ${endTime}.`,
//     });

//     res.sendStatus(200);
//   } catch (error) {
//     console.error("Webhook error:", error);
//     res.status(500).json({ message: "Webhook processing error" });
//   }
// };

 const crypto = require('crypto');

async function handleWebhook(req, res) {
  try {
    const payload = req.body.payload;
    const signature = req.headers['x-calendly-signature'];
    const secret = process.env.CALENDLY_WEBHOOK_SECRET; // From .env

    if (secret) {
      const computedSignature = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(req.body))
        .digest('hex');
      if (computedSignature !== signature) {
        console.error('Invalid signature');
        return res.status(401).send('Invalid signature');
      }
    }

    console.log('Webhook payload:', payload);

    if (payload.event === 'invitee.created') {
      const { name, email, start_time, end_time, event_type, uri } = payload;

      const meeting = new Meeting({
        eventTypeUri: event_type.uri,
        invitee: { name, email },
        startTime: start_time,
        endTime: end_time,
        calendlyEventUri: uri,
        createdAt: new Date(),
      });
      await meeting.save();
      console.log('Meeting saved to MongoDB:', meeting._id);
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('Internal Server Error');
  }
}

 
 
module.exports = { getMe, getEventTypes, getSlots,getEventTypeDuration ,createSchedulingLink,handleWebhook};