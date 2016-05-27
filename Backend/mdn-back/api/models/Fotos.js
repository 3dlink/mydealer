/**
 * Fotos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Fotos",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
  	Url:{
  		type:'string',
  		size:255
  	},
  	Guid:{
  		type:'string',
  		size:255
  	},
  	Foto_Publicacion:{
      model: 'Publicaciones'
    },
  	RowVersion:{type:'datetime'}
  }
};

