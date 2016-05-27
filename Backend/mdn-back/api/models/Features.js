/**
 * Features.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Features",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
  	Nombre:{
  		type:'string',
  		size: 255
  	},  	
  	Features_Publicacion:{
      model:'Publicaciones',
      unique: true
    },
  	RowVersion:{type:'datetime'}
  }
};

