/**
 * Dealers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Dealers",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    Id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
  	DealerId:{type:'integer'},
  	Nombre:{
  		type:'string',
  		size: 255
  	},
  	Telefono:{
  		type:'string',
  		size: 255
  	},
  	WhatsApp:{
  		type:'string',
  		size: 255
  	},
  	Direccion:{
  		type:'text',
		  size: 255  	
	  },
  	Provincia:{
  		type:'string',
  		size: 255
  	},
  	Coordenadas:{
  		type:'string',
  		size: 255
  	},
  	Logo:{
  		type:'binary'
  	},
  	RowVersion:{type:'datetime'},
    Publicaciones:{
      collection: 'Publicaciones',
      via: 'Publicacion_Dealer'
    }
  }
};

