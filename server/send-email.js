const nodemailer = require('nodemailer');

module.exports = function sendEmail({ store, res }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.GMAIL_CODE
    }
  });
  const mailOptions = {
    from: process.env.TO_EMAIL,
    to: process.env.FROM_EMAIL,
    subject: "Hey, here is toy store",
    text: JSON.stringify(store)
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
      res.send("OK")
    }
  });
};
