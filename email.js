//Formulário de cadastro
const nodemailer = require('nodemailer');

const user = process.env.EMAIL;
const pass = process.env.SENHA;

let transporter = nodemailer.createTransport({
        host: "importlink.com.br",
        port: process.env.PORTA,
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
    
dotenv.config();

