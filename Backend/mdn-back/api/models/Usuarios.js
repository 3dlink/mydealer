/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"Usuarios",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
  	Nombre:{
  		type:'string',
  		size:255
  	},
  	Apellido:{
  		type:'string',
  		size:255
  	},
  	Telefono:{
  		type:'string',
  		size:255
  	},
  	Celular:{
  		type:'string',
  		size:255
  	},
  	Correo:{
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    password: {
        type: 'text'
    },
  	RowVersion:{
      type:'datetime'
    },
    toJSON: function () {
        var obj = this.toObject();
        delete obj.password;
        delete obj.socialProfiles;
        return obj;
    }    
  },
  beforeUpdate: function (values, next) {
      CipherService.hashPassword(values);
      next();
  },
  beforeCreate: function (values, next) {
      CipherService.hashPassword(values);
      next();
  }
};

