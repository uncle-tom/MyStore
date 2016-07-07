angular
  .module('MyStore', [
    'ngAnimate', 
    'ui.router', 
    'ngMaterial', 
    'ksSwiper', 
    'ngStorage', 
    'templates',
    'ngResource', 
    'angularFileUpload', 
    'jkuri.gallery',
    'ng-token-auth', 
    'Devise',
    'xeditable',
    'yaru22.angular-timeago'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('home', {
        url: '/', 
        controller: 'mainCtrl',
        templateUrl: 'index.html'
      })
      .state('product', {
        url: '/product/{id}', 
        controller: 'productCtrl',
        templateUrl: 'product/show.html'
      })
      .state('admin', {
        url: '/admin',
        controller: 'adminCtrl',
        templateUrl: 'admin/index.html'
      });
      $urlRouterProvider.otherwise('/');
    }
  ]);
