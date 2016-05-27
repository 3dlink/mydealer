/**
 * DealersController
 *
 * @description :: Server-side logic for managing dealers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne:function(req, res, next){
		Dealers.findOne({Id:req.param('id')})
		.exec(function CB(err, Dealers){
			Publicaciones.find({Publicacion_Dealer:req.param('id')})
			.populate('Fotos')
			.exec(function CB(err, publicaciones){
				return res.json({Dealers,publicaciones});
			});
			
		});
	}
	
};

