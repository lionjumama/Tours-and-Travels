// Backend code (Node.js + Express)
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

router.post('/api/send-email', async (req, res) => {
  const { email, issue } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'driverbaby307@gmail.com',
    subject: 'Contact Us Form Submission',
    text: `From: ${email}\nIssue: ${issue}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email' });
  }
});

module.exports = router;
