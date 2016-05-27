/**
 * Valores.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Valores",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
  	Tipo:{
  		type:"string",
  		size:255
  	},
  	Tasa:{type:"integer"},
  	Desde:{type:"integer"},
  	Hasta:{type:"integer"},
  	RowVersion:{type:'datetime'}
  }
};

