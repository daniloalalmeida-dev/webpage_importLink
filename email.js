const nodemailer = require('nodemailer');

const user = "contato@importlink.com.br";
const pass = " ";

let transporter = nodemailer.createTransport({
        host: "importlink.com.br",
        port: 465,
        secure: true,
        auth: {user, pass}
    });


    transporter.sendMail({
        from: user,
        to: "telmo.almeida@importlink.com.br",
        replyTo: "email",
        subject: "Contato via site",
        text: "Telmo, esta pessoa abaixo fez contato com você fica site. A mensagem dela é: ",
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    })
    


