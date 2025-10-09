const path = require('node:path');
const process = require('node:process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');

// Scope for calendar access
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// Path to credentials.json
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Authenticates for admin’s calendar (opens browser first time for consent).
 */
async function getCalendarClient() {
  const auth = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  return google.calendar({ version: 'v3', auth });
}

/**
 * Creates an event in the admin’s Google Calendar.
 * @param {Object} calendlyEventData - Calendly event data (start_time, end_time, etc.).
 */
async function createEvent(calendlyEventData) {
  try {
    const calendar = await getCalendarClient();

    // Extract meeting link
    const meetingLink = calendlyEventData.join_url || calendlyEventData.uri || 'No meeting link provided';

    const event = {
      summary: `Meeting: ${calendlyEventData.name || 'Scheduled Meeting'}`,
      description: `Booked via Calendly. Invitee: ${calendlyEventData.invitee.name} (${calendlyEventData.invitee.email})\nMeeting Link: ${meetingLink}`,
      start: {
        dateTime: calendlyEventData.start_time,
        timeZone: 'UTC', // Adjust to your timezone, e.g., 'America/New_York'
      },
      end: {
        dateTime: calendlyEventData.end_time,
        timeZone: 'UTC',
      },
      attendees: [{ email: calendlyEventData.invitee.email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // Email 1 day before
          { method: 'popup', minutes: 10 }, // Popup 10 min before
        ],
      },
      conferenceData: meetingLink !== 'No meeting link provided' ? {
        createRequest: {
          requestId: `calendly-${calendlyEventData.uri.split('/').pop()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      } : undefined,
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: meetingLink !== 'No meeting link provided' ? 1 : 0,
    });

    return response.data;
  } catch (error) {
    console.error('Error creating Google Calendar event:', error);
    throw error;
  }
}

module.exports = { createEvent };