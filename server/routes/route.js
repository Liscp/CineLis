require('dotenv').config()
const express = require('express'),
nodeMailer = require('nodemailer');
const router = express.Router();
const usuario = require('../db/request')


router.get("/cartelera", (req, res)=>{
    usuario.formatoUsuario.findAll().then(libro => {
        JSON.stringify(libro)===JSON.stringify([])?res.json([]):res.json(libro);
      });
})
router.post('/user',(req,res)=>{
        try{
            usuario.formatoUsuario.create(req.body).then(peli => {
                res.status(200)
                res.json(peli)
              })
        }catch{
            console.log(error)
        }
        
      
})
router.post('/cartelera/:id',(req,res)=>{
    const id = req.params.id
    usuario.formatoUsuario.update(req.body,{
        where: {
            id: id
        }
    }).then(peli => {
        res.status(200)
        res.json(peli)
      })
  })
router.post('/user/delete',(req,res)=>{
   
    usuario.formatoUsuario.destroy({
        where: {
            titulo: req.body.titulo
        }
      })
      });
      router.post('/send-email', (req, res)=>{
        usuario.formatoEmail.create({  
            peli: req.body.peli,
            boletos: req.body.boletos,
            email: req.body.email,
            valorboleto: req.body.valorboleto, 
          }
            ).then(jane => {
          res.status(200)
          res.json(jane)
        })
     let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'karolis81299@gmail.com',
              pass: 'miamorcote8'
          }
      });
      let mailOptions = {
          
          to: req.body.email,
          subject: `Felicitaciones en tu proxima visita verás ${req.body.peli}`,
          text: `compraste en total ${req.body.boletos} `
          
      };
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });
      
      res.end();
      });

module.exports = router;