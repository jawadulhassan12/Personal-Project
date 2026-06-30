const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ code: 405, status: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, message } = req.body;
  const name = firstName + ' ' + lastName;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(200).json({ code: 200, status: 'Message received (email not configured)' });
  }

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await contactEmail.sendMail({
      from: name,
      to: process.env.EMAIL_USER,
      subject: 'Contact Form Submission - Portfolio',
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    });
    res.status(200).json({ code: 200, status: 'Message Sent' });
  } catch (error) {
    res.status(500).json({ code: 500, status: 'Error sending message' });
  }
}
