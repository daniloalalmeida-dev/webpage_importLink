const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 3000

const user = "contato@importlink.com.br";
const pass = " ";

app.get('/send',(req, res) => {

    const transporter = nodemailer.createTransport({
        host: "mail.importlink.com.br",
        port: 587,
        auth: {user, pass}
    })

    transporter.sendMail({
        from: user,
        to: "contato@importlink.com.br",
        replyTo: "daniloalalmeida@outlook.com.br",
        subject: "Obrigado por seu e-mail",
        text: "Obrigado por seu e-mail, entraremos em contato",
    }).then(info=>{
        req.send(info)
    }).catch(error =>{
        res.send(error)
    })
})
