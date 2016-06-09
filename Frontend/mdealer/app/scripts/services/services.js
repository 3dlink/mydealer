'use strict';

angular.module('mdnService',[])
	.factory("publicaciones",function($resource) {
	  return $resource(webroot+'/publicaciones/:id',{id:'@id'},{
	  	'search':{url:webroot+'/publicaciones/search', method:'POST',isArray:true },
	  	'sendMail':{url:webroot+'/publicaciones/sendDetailMail', method:'get'},
	  	'getLastInsert':{url:webroot+'/publicaciones/getLastInsert', method:'Get'}
	  });
	})
	.factory("pujas",function($resource) {
	  return $resource(webroot+'/pujas/:id',{id:'@id'});
	})
	.factory("usuarios",function($resource) {
	  return $resource(webroot+'/usuarios/:id',{id:'@id'});
	})
	.factory("dealers",function($resource) {
	  return $resource(webroot+'/dealers/:id',{id:'@id'});
	})		

;