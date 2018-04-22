const nodemailer = require('nodemailer');

module.exports = function sendEmail({store, res}) {
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
    subject: "Redux Store copy",
    text: "Hey, here is you redux store copy",
    attachments: [
      {
        filename: 'store.json',
        content: new Buffer(JSON.stringify(store), 'utf-8')
      },
    ]
  };

  return transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log("err", err);
      res.send("");
      return;
    } else {
      console.log("info", info);
      const millis = Date.now() - startDate;
      console.log("Seconds on processing: ", (millis / 1000));
    }
    res.send("OK")
  });
};
