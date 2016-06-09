'use strict';

/**
 * @ngdoc function
 * @name mdnFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mdnFrontApp
 */
angular.module('myDealerNetworkApp')
  .controller('searchController', function ($scope,$timeout,publicaciones) {
  	$scope.searchInput='';
  	$scope.searchResult=[];
    $scope.busquedas=[];
    $scope.search=function(){
    	console.log($scope.searchInput);
    }
    $scope.searchBY=function(){
      var busqueda={};
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
