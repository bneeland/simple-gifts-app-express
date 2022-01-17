import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/', (req, res) => {


  let transporter = nodemailer.createTransport({
    host: 'smtp.postmarkapp.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '742b493c-99cd-499a-9c29-b0a8318cf381',
      pass: '742b493c-99cd-499a-9c29-b0a8318cf381',
    },
    tls:{
      rejectUnauthorized: false,
    }
  });

  let mailOptions = {
    from: '"Simple Gifts app" <info@simplegiftsapp.com>',
    to: 'brian.neeland@gmail.com',
    subject: 'Simple Gifts app - Test 2',
    text: 'Hello, this is a test email.',
    html: '<b>Hello</b>, this a test email.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);

    res.render('contact', {msg:'Email has been sent'});
  });


  console.log(req.body);
  res.send(req.body);
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
