angular
  .module('MyStore', [
    'ngAnimate', 
    'ui.router', 
    'ngMaterial', 
    'ksSwiper', 
    'ngStorage', 
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
        templateUrl: 'test.html'
      });
      $urlRouterProvider.otherwise('/');
    }
  ]);