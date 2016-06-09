'use strict';

/**
 * @ngdoc function
 * @name myDealerNetworkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myDealerNetworkApp
 */
angular.module('myDealerNetworkApp')
  .controller('DealersCtrl', function ($scope, $stateParams, dealers) {
  	$scope.perfilDealer=function(){
  		dealers.get({id:$stateParams.id})
  		.$promise.then(function (data) {
	  		$scope.perfil=data.Dealers;
	  		$scope.publicaciones=data.publicaciones;
	  	});
  	}
  	$scope.changueClass=function(type){     
        $scope.visible=type;
    }
  });
