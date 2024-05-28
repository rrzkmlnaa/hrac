import { google } from 'googleapis';

const privateKey = (process.env.RESOURCE_GOOGLE_PRIVATE_KEY as string).replace(/\\n/gm, '\n');
const clientEmail = process.env.RESOURCE_GOOGLE_CLIENT_EMAIL as string;
const spreadsheetId = process.env.RESOURCE_SPREADSHEET_ID as string;

const jwtClient = new google.auth.JWT(
  clientEmail,
  undefined,
  privateKey,
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth: jwtClient });

export { sheets, spreadsheetId };
