'use strict';

/**
 * @ngdoc function
 * @name myDealerNetworkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myDealerNetworkApp
 */
angular.module('myDealerNetworkApp')
  .controller('PublicacionesCtrl', function ($scope,publicaciones,$stateParams,$location,$filter, pujas) {
  	$scope.publicacion=[];
  	$scope.valor=[];
  	$scope.cuota=0;
  	$scope.tasaSys=0;
  	$scope.porcentajeMensual=0;    
    $scope.pricesArray=[];
    $scope.yearsArray=[];
    $scope.diasRestantes=0;
    $scope.ofertActual=0;
    $scope.montoMin=0;
    $scope.TuOferta=0;
    $scope.photoSelected=null;
    $scope.contact=[];
    $scope.sendMail=function(){
        console.log($scope.contact);
        $scope.contact.id=1;
        publicaciones.sendMail($scope.contact);
    }
    $scope.initDetail=function(){
    	//$scope.calculateCuota();
    	publicaciones.get({id:$stateParams.id})
	    	.$promise.then(function (data) {
	    		console.log(data);
	    		$scope.publicacion=data['publicacion'];
	    		$scope.valor=data['valor'];
	    		$scope.calculateCuota();
                if($scope.publicacion.Pujas.length==0){
                    $scope.ofertActual=0;
                    $scope.montoMin=$scope.publicacion.PrecioMinimo;
                    $scope.TuOferta= $scope.publicacion.PrecioMinimo;
                }else{
                    $scope.ofertActual=$scope.publicacion.Pujas[$scope.publicacion.Pujas.length-1]['Monto'];
                    $scope.montoMin=$scope.publicacion.Pujas[$scope.publicacion.Pujas.length-1]['Monto']+1;
                    $scope.TuOferta= $scope.montoMin;
                }
                if($scope.publicacion.Fotos.length>=0){
                    $scope.photoSelected=$scope.publicacion.Fotos[0]['Url'];
                }
                $scope.calculateTime($scope.publicacion.Expira);
	    	});
    }
    $scope.initIndex=function(){
        //$scope.calculateCuota();
        $scope.publicaciones=publicaciones.query($location.$$search);
        /*publicaciones.query()
        .$promise.then(function (data) {
                console.log(data);
                $scope.publicaciones=data;
            });*/
        $scope.years()
        $scope.prices();
        
    }
    $scope.pujar=function(TuOferta){
        console.log(TuOferta);
        var puja={
            Usuario_Puja:1,
            Publicacion_Puja:$scope.publicacion.Id,
            Monto:TuOferta
        };
        console.log(puja);
        pujas.save(puja)
            .$promise.then(function (data) {
                
            });
        
    }
    $scope.calculateCuota=function(){
    	$scope.tasaSys=$scope.selectTasa($scope.publicacion['Año']);
    	if($scope.tasaSys){
    		var tasaAnual=parseFloat($scope.tasaSys)/100;
	    	var tasaMensual=Math.pow((1+tasaAnual), 0.08333333)-1;
	    	$scope.porcentajeMensual=(tasaMensual*100).toFixed(2);
	    	var numerador=(tasaMensual*parseFloat($scope.publicacion.PrecioEnDOP))
	    	var denominador=1-Math.pow((1+tasaMensual),-60);
	    	$scope.cuota=numerador/denominador;
    	}else{
    		$scope.cuota='N/D';
    	}
    	

    	//console.log(tasaMensual*100);
    	//(1-)
    }
    $scope.selectTasa=function(year){
    	for(var key in $scope.valor){
    		console.log(year+' '+$scope.valor[key]['Desde'] );
    		console.log(year>=$scope.valor[key]['Desde'] );
    		if(year>=$scope.valor[key]['Desde'] && year<=$scope.valor[key]['Hasta']){
    			return $scope.valor[key]['Tasa'];
    			break;
    		}
    	}
    	return false;
    }
    $scope.years=function(){
        $scope.yearsArray=[];
        for(var x=2016; x>=2000; x--){
            $scope.yearsArray.push(x);
        }
    }
    $scope.prices=function(){
        $scope.pricesArray=[];
        var limit=2000000;
        var incremento=500000;
        for(var x=0; x<limit; x){
            $scope.pricesArray.push({tittle:'$ '+parseFloat(x).toFixed(2)+' - '+'$ '+parseFloat(x+incremento).toFixed(2),value:'>='+parseFloat(x).toFixed(2)+'<='+parseFloat(x+incremento).toFixed(2)});
            x+=incremento;
        }
        $scope.pricesArray.push({tittle:'$ +'+parseFloat(limit).toFixed(2),value:'>'+parseFloat(limit).toFixed(2)});
        console.log($scope.pricesArray);
    }
    $scope.calculateTime=function(expire){
        var espiraEl=new Date(expire);
        var actual=new Date();
        console.log(actual);
        var MILISENGUNDOS_POR_DIA = 1000 * 60 * 60 * 24;
        var utc2 = Date.UTC(espiraEl.getFullYear(), espiraEl.getMonth(), espiraEl.getDate());
        var utc1 = Date.UTC(actual.getFullYear(), actual.getMonth(), actual.getDate());
        
        $scope.diasRestantes=Math.floor((utc2 - utc1) / MILISENGUNDOS_POR_DIA);
        //return Math.floor((utc2 - utc1) / MILISENGUNDOS_POR_DIA);
    }
    $scope.photoSelect=function(photo){
        $scope.photoSelected=photo;
    }
  });
