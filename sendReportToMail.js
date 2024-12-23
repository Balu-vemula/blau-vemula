const nodemailer = require('nodemailer');
const fs = require('fs');

// Replace with your email and password (or use an app password if using Gmail)
const emailConfig = {
  user: 'balaraju.vemula@zemosolabs.com',
  pass: 'ldoy ytln amdd kjbr',
};

// Replace with the email address where you want to send the report
const toEmail = ['balaraju.vemula@zemosolabs.com', 'rashmi.jogiya@zemosolabs.com', 'ashish.das@zemosolabs.com', 'chetan@washmetrix.com', 'dipak@washmetrix.com'];

// Replace with the path to your HTML report
const htmlReportPath = 'cypress/reports/report.html';

// Read the HTML report content
const htmlReportContent = fs.readFileSync(htmlReportPath, 'utf-8');

// // Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

// Get the current date and format it
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  day: '2-digit',
  month: '2-digit',
});

const date = currentDate
// Define the email options
const mailOptions = {
  from: emailConfig.user,
  to: toEmail,
  subject: 'Cypress Test Report - ' + currentDate,
  html: `
  <p>Hi All,</p>

    <p>Greetings for the day!</p>

    <p>Please find the attached generated test report for WashMetrix </P>

    <b> Please downlaod the attached report to see the test results </b>

    <p>Thanks & Regards </p>
    <p> Balraju Vemula </p>`,
  attachments: [
    {
      filename: 'CypressTestReport.html',
      content: htmlReportContent,
      encoding: 'utf-8',
    },
  ],
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
