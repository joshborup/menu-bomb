module.exports = {
    sendMessage(req, res) {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail', /// must be changed
            port: 5000, /// dunno
            secure: true,
            auth: {
                user: '',
                pass: '', 
            }
        });
        let mailOptions = {
            from: req.body.user, // sender address 
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.body, // plain text body
            html: '<b>stuff</b>' // html body
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
                res.render('index');
        });
    }
    
}