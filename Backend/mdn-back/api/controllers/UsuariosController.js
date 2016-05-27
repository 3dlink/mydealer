/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne:function(req, res, next){
		var perfil=[];
		Usuarios.findOne({Id:req.param('id')})
		.exec(function CB(err, usuario){
			perfil=usuario;
			Pujas.find({Usuario_Puja:req.param('id')})
			.exec(function CB(err, pujas){

				var arrayPujas=[];
				for(x in pujas){
					arrayPujas.push(pujas[x]['Publicacion_Puja']);
				}
				Publicaciones.find({id:arrayPujas})
				.populate('Fotos')
				.populate('Pujas')
				.exec(function CB(err, publicaciones){
					console.log(perfil);
					return res.json({perfil,publicaciones});
				});
				
			});
			
		});
	}
};

