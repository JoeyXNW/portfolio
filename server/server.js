const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//for heroku
app.use(express.static("client/build"));

app.post("/api/email", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD
    }
  });

  var mailOptions = {
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

//===========================================
//             Default
//===========================================
// only for production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
