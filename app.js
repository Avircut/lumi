const express = require('express');
const config = require('config');
const nodemailer = require('nodemailer');

const app = express();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lumisounds80@gmail.com',
    pass: '931730Benjamin',
  },
});

// app.use('/api/auth', require('./routes/auth.routes'))
const PORT = config.get('port') || 5000;

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use('/', express.static('dist'));
app.post('/', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  if (req.body.name === '' || req.body.userlastName === '' || req.body.phone === '' || req.body.email === '') return res.sendStatus(400);
  const mailOptions = {
    from: 'lumisound80s@gmail.com',
    to: 'lomoff.slaw@yandex.ru',
    subject: `Новый заказ: ${req.body.name}`,
    text: `Имя: ${req.body.name}\nТелефон: ${req.body.phone}\nEmail: ${req.body.email}\nКомментарий: ${req.body.orderdesc}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send(JSON.stringify({ result: 1 }));
    }
  });
});
app.listen(PORT, () => console.log('Сервер запущен...'));
