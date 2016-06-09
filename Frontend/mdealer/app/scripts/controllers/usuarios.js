'use strict';

/**
 * @ngdoc function
 * @name myDealerNetworkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myDealerNetworkApp
 */
angular.module('myDealerNetworkApp')
  .controller('UsuariosCtrl', function ($scope, $stateParams, usuarios) {
  	$scope.perfil=[];
  	$scope.initPerfil=function(){
  		usuarios.get({id:1})
  		.$promise.then(function (data) {
	  		$scope.perfil=data.perfil;
	  		$scope.publicaciones=data.publicaciones;
	  	});
  	}
  	$scope.editPerfil=function(){
  		usuarios.get({id:$stateParams.id})
  		.$promise.then(function (data) {
	  		$scope.perfil=data.perfil;
	  	});
  	}
  	$scope.changueClass=function(type){     
        $scope.visible=type;
    }
  });
