// EmailService.js - in api/services
var nodemailer = require('nodemailer');
var configuracion={
    'local':{
        service: "",
        host: '',
        auth:{
            user:"",
            pass:""
        }
    }

};
module.exports = {
    sendMail: function(options,config) {
        var smtpTransport = nodemailer.createTransport('SMTP',configuracion[config]);
        options.from="MyDealerNetwork <dontreply@mydealernetwork.com>";
        //console.log(options);
        /*
            options= {
              from:"gestionlist <dontreply@gestionlist.com>",
              to:"wolf1827@gmail.com",
              subject:'registro exitoso',
              text:'registro exitoso en gestionlist ¬_¬ \\m/'
            };
        */
        smtpTransport.sendMail(options,function(error,response){
          if(error){
            console.log(error);
            return false;
          }else{
            console.log("mensaje enviado");
            return true;
          }
        });

    }
};