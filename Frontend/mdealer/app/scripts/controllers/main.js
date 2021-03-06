'use strict';

/**
 * @ngdoc function
 * @name myDealerNetworkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myDealerNetworkApp
 */
angular.module('myDealerNetworkApp')
  .controller('MainCtrl', function ($scope,$timeout,publicaciones) {
  	$scope.searchInput='';
  	$scope.searchResult=[];
    $scope.busquedas=[];
    $scope.initHome=function(){
      publicaciones.getLastInsert()
      .$promise.then(function (data) {
      	console.log(data);
      	$scope.publicacionesHome=data.publicacion;
      });
    }

    $scope.search=function(){
    	console.log($scope.searchInput);
    }
    $scope.searchBY=function(){
      var busqueda={};
      console.log($scope.searchInput);
      busqueda.search=$scope.searchInput;
    	if($scope.searchInput.length>=2){
    		publicaciones.search(busqueda)
          .$promise.then(function (data) {
            $scope.busquedas=data;
          },function (error) {
            console.log(error);
          });
    	}else{
        $scope.busquedas=[];
    	}
    }
    $scope.delay=function() { 
          $timeout(function(){
            $scope.show_fastS=false;
          }, 600); //timer = setTimeout(callback, ms);
    }
  });
