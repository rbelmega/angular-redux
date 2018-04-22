const nodemailer = require('nodemailer');
const fs = require('fs')
const jsonfile = require('jsonfile');

const path = '/tmp/store.json';

module.exports = function sendEmail({ store, res }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.GMAIL_CODE
    }
  });

  jsonfile.writeFileSync(file, store)

  const mailOptions = {
    from: process.env.TO_EMAIL,
    to: process.env.FROM_EMAIL,
    subject: "Hey, here is toy store",
    text:"Hey, here is toy store",
    attachments: [{ path }]
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
    {
      console.log(err);
      res.send("")
    } else {
      console.log(info);
      const millis = Date.now() - startDate;
      console.log("Seconds on processing: ", (millis/1000));
      res.send("OK");
    }
    fs.unlinkSync(path)
  });
};
