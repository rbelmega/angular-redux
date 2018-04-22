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
      res.statusCode = 500;
      res.send("");
    } else {
      console.log("info", info);
      res.statusCode = 200;
      res.send("OK");
    }
    return;
  });
};
