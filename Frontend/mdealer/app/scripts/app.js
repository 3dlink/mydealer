'use strict';

/**
 * @ngdoc overview
 * @name myDealerNetworkApp
 * @description
 * # myDealerNetworkApp
 *
 * Main module of the application.
 */
angular
  .module('myDealerNetworkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'mdnService',
    'slick'
  ])
  .config(function ($locationProvider, $stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('/', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('publicaciones', {
        url:'/publicaciones/:parameters?',
        templateUrl: 'views/publicaciones/index.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'publicaciones'
      })
      .state('publicacion', {
        url:'/publicacion/:id',
        templateUrl: 'views/publicaciones/detail.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'publicaciones'
      })
      .state('perfil', {
        url:'/perfil',
        templateUrl: 'views/users/perfil.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .state('edit', {
        url:'/edit/:id',
        templateUrl: 'views/users/edit.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .state('dealer', {
        url:'/dealer/:id',
        templateUrl: 'views/dealers/main.html',
        controller: 'DealersCtrl',
        controllerAs: 'dealers'
      })
      .state('contact', {
        url:'/contact',
        templateUrl: 'views/users/contact.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'publicaciones'
      })
      .state('politica', {
        url:'/politica',
        templateUrl: 'views/users/politica.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'publicaciones'
      });
      $urlRouterProvider.otherwise('/');
  });
