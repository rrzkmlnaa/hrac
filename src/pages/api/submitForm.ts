/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next';

import { sheets, spreadsheetId } from './sheetsClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstname, lastname, email, telephone, company, inquiry, message } = req.body;

  if (!firstname || !email || !telephone || !company || !inquiry || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!B:B',
    });

    const values = response.data.values || [];
    const nextRowIndex = values.length + 1; 

    const range = `Sheet1!B${nextRowIndex}:H${nextRowIndex}`;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [firstname, lastname, email, telephone, company, inquiry, message],
        ],
      },
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Failed to submit form', error });
  }
}