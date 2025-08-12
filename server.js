const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000; // You can change this to your desired port number

// Body parser middleware to parse incoming request bodies
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Serve static files (e.g., your HTML page)
app.use(express.static("public"));

// Route to handle form submissions
app.post("/submit-form", (req, res) => {
  const { fullname, email, phone, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Change this to your email service provider
    auth: {
      user: "josephmaruria@gmail.com", // Change this to your email address
      pass: "pkchatfzjxjqnuqk", // Change this to your email password
    },
  });

  // Email message options
  const mailOptions = {
    from: "info@paysokosystems.com", // Change this to your website's email address
    to: [
      "josephmaruria@gmail.com",
      "juliet.wamuyu@paysokosystems.com",
      "info@paysokosystems.com",
      "mosesk@paysokosystems.com",
      "michaelc@paysokosystems.com",
      "petem@paysokosystems.com",
    ], // Change this to your desired email address
    subject: "New Message from PaySoko Systems Contact Form",
    text: `
      Full Name: ${fullname}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .send("Oops! Something went wrong. Please try again later.");
    } else {
      console.log("Email sent:", info.response);
      res.send(
        "Thank you for contacting PaySoko Systems Inc. One of our agents will review your message and contact you shortly!"
      );
    }
  });
});

app.post("/request-demo", (req, res) => {
  const { companyName, jobTitle, firstName, lastName, country, phoneNumber, inquiry } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Change this to your email service provider
    auth: {
      user: "josephmaruria@gmail.com", // Change this to your email address
      pass: "pkchatfzjxjqnuqk", // Change this to your email password
    },
  });

  // Email message options
  const mailOptions = {
    from: "info@paysokosystems.com", // Change this to your website's email address
    to: [
      "josephmaruria@gmail.com",
      "juliet.wamuyu@paysokosystems.com",
      "info@paysokosystems.com",
      "mosesk@paysokosystems.com",
      "michaelc@paysokosystems.com",
      "petem@paysokosystems.com",
    ], // Change this to your desired email address
    subject: "New Message from PaySoko Systems Request Demo Form",
    text: `
      Company Name: ${companyName}
      Job Title: ${jobTitle}
      First Name: ${firstName}
      Last Name: ${lastName}
      Country: ${country}
      Phone Number: ${phoneNumber}
      Inquiry: ${inquiry}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .send("Oops! Something went wrong. Please try again later.");
    } else {
      console.log("Email sent:", info.response);
      res.send(
        "Thank you for contacting PaySoko Systems Inc. One of our agents will review your message and contact you shortly!"
      );
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
