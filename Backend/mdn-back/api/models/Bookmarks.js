/**
 * Bookmarks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Bookmarks",
	autoCreatedAt: false,
	autoUpdatedAt: false,
  attributes: {
  	Usuario_Bookmark:{type:'integer'},
  	Publicacion_Bookmark:{type:'integer'},
  	RowVersion:{type:'datetime'}
  }
};

