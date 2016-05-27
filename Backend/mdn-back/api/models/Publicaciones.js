/**
 * Publicaciones.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Publicaciones",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    Id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    InventarioId:{type:'integer'},
    Visitas:{type:'integer'},
    Fecha:{type:'datetime'},
    Marca:{
      type:'string',
      size:255
    },
    Modelo:{
      type:'string',
      size:255
    },
    Categoria:{
      type:'string',
      size:255
    },
    Edicion:{
      type:'string',
      size:255
    },
    Año:{
      type:'string',
      size:255
    },
    Motor:{
      type:'string',
      size:255
    },
    Induccion:{
      type:'string',
      size:255
    },
    Transmision:{
      type:'string',
      size:255
    },
    Traccion:{
      type:'string',
      size:255
    },
    Color:{
      type:'string',
      size:255
    },
    Combustible:{
      type:'string',
      size:255
    },
    Millaje:{type:'integer'},
    Puertas:{type:'integer'},
    Pasajeros:{type:'integer'},
    Condicion:{
      type:'string',
      size:255
    },
    Precio:{type:'decimal'},
    Moneda:{
      type:'string',
      size:255
    },
    PrecioEnDOP:{type:'decimal'},
    Estado:{
      type:'string',
      size:255
    },
    type:{
      type:'boolean',
      defaultsTo: true
    },
    status:{
      type:'boolean',
      defaultsTo: true      
    },
    Publicacion_Dealer:{
      model:'Dealers'
    },
    Features:{
      collection:'Features',
      via: 'Features_Publicacion'
    },
    Fotos: {
      collection: 'Fotos',
      via: 'Foto_Publicacion'
    },
    Pujas: {
      collection: 'Pujas',
      via: 'Publicacion_Puja'
    },
    RowVersion:{type:'datetime'}
  }
};