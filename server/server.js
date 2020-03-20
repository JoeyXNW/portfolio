const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const port = 4444;
app.listen(port, () => {
  console.log("We are live on port 4444");
});

app.post("/api/email", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    // port: 465,
    auth: {
      user: "xwang985@gmail.com",
      pass: process.env.MAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: "xwang985@gmail.com",
    to: "xwang985@gmail.com",
    subject: data.subject,
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
