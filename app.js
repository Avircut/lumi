const express = require('express')
const config = require('config')
const app = express()
var nodemailer = require('nodemailer')


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lumisounds80@gmail.com',
    pass: '931730Benjamin'
  }
})

// app.use('/api/auth', require('./routes/auth.routes'))
const PORT = config.get('port') || 5000

app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
app.use('/',express.static('dist'))
app.post('/', function(req,res){
    if(!req.body) return res.sendStatus(400)
    console.log(req.body)
    if(req.body.name=="" || req.body.userlastName=="" || req.body.phone=="" || req.body.email=="") return res.sendStatus(400)
    var mailOptions = {
        from: 'lumisound80s@gmail.com',
        to: 'lomoff.slaw@yandex.ru',
        subject: `Новый заказ: ${req.body.name} ${req.body.lastName}`,
        text: `Имя: ${req.body.name}\nФамилия: ${req.body.lastName} \nТелефон: ${req.body.phone}\nEmail: ${req.body.email}\nКомментарий: ${req.body.orderdesc}`
      }
      
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send(JSON.stringify({result:'success'}))
      }
    })
})
app.listen(PORT,()=>console.log("Сервер запущен..."))


// async function start(){
//     try{
//         await mongoose.connect(config.get('mongoUri'),{

//         })
//         app.listen(PORT, ()=> console.log(`App has been started on port ${PORT}...`))
//     }
//     catch(e){
//         console.log('Server Error', e.message)
//         process.exit(1)
//     }
// }
// start()

