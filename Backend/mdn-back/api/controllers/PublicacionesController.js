/**
 * PublicacionesController
 *
 * @description :: Server-side logic for managing publicaciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne:function(req,res,next){
		Publicaciones.findOne({Id:req.param('id')})
		.populate('Fotos',{where:{Foto_Publicacion:req.param('id')}})
		.populate('Pujas',{where:{Publicacion_Puja:req.param('id')}})
		.populate('Features',{where:{Features_Publicacion:req.param('id')}})
		.populate('Publicacion_Dealer')
		.exec(function CB(err, publicacion){
			Valores.find().exec(function CB(err, valor){
				return res.json({publicacion,valor});
			});
			
		});
		
	},
	sendDetailMail:function(req,res,next){
		console.log(req.allParams());
		var options={
          //to:req.param('email'),
          to:'info@3dlinkweb.com',
          subject:req.param('asunto'),
          text: req.param('detalle')
        }
        EmailServices.sendMail(options,'local');

        options={
          //to:req.param('email'),
          to:req.param('mail'),
          subject:'correo resivido',
          text: "correo resivido"
        }
        EmailServices.sendMail(options,'local');
        return res.json({respuesta:true});
	},
	getLastInsert:function(req,res,next){
		Publicaciones.find({limit: 6})
		.populate('Fotos')
		.exec(function CB(err, publicacion){
			return res.json({publicacion});
		});
    },
	search:function(req,res,next){
		Publicaciones.find({where:{
			or : [
			    { Modelo: { 'contains':  req.param('search') } },
			    { Marca: { 'contains':   req.param('search') } },
			    { Edicion: { 'contains': req.param('search') } }
			  ]
		},limit: 20}).exec(function searckF(err, publicaciones){
			return res.json(publicaciones);
		});

	},
	sendMail:function(req,res,next){
        var options={
          //to:req.param('email'),
          to:'wolf1827@gmail.com',
          subject:'registro exitoso',
          html: "<h1>registro exitoso</h1>"
        }
        EmailServices.sendMail(options,'local');
	}
};

