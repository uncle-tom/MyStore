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
    'yaru22.angular-timeago',
    'ngCart'
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
      .state('catalog', {
        url: '/catalog', 
        controller: 'catalogCtrl',
        templateUrl: 'catalog/show.html'
      })
      .state('about', {
        url: '/about', 
        controller: 'mainCtrl',
        templateUrl: 'about.html'
      })
      .state('contact', {
        url: '/contact', 
        controller: 'mainCtrl',
        templateUrl: 'contact.html'
      })
      .state('cart', {
        url: '/cart', 
        controller: 'mainCtrl',
        templateUrl: 'cart/cart.html'
      })
      .state('checkout', {
        url: '/checkout', 
        controller: 'mainCtrl',
        templateUrl: 'cart/checkout.html'
      })
      .state('admin', {
        url: '/admin',
        controller: 'adminCtrl',
        templateUrl: 'admin/index.html'
      })
      .state('adminmain', {
        url: '/admin/main',
        controller: 'adminCtrl',
        templateUrl: 'admin/main.html'
      })
      .state('adminproduct', {
        url: '/admin/product',
        controller: 'productCtrl',
        templateUrl: 'admin/product.html'
      })
      .state('editproduct', {
        url: '/admin/product/edit/{id}',
        controller: 'productCtrl',
        templateUrl: 'admin/productedit.html'
      })
      .state('editcategory', {
        url: '/admin/category/edit/{id}',
        controller: 'categoryCtrl',
        templateUrl: 'admin/categoryedit.html'
      })
      .state('admincategory', {
        url: '/admin/category',
        controller: 'categoryCtrl',
        templateUrl: 'admin/category.html'
      })
      .state('addnewproduct', {
        url: '/admin/addnewproduct',
        controller: 'addNewProduct',
        templateUrl: 'admin/addnewproduct.html'
      })
      .state('addnewcategory', {
        url: '/admin/addnewcategory',
        controller: 'addNewCategory', 
        templateUrl: 'admin/addnewcategory.html'
      })
      .state('admininvoices', {
        url: '/admin/invoices',
        controller: 'invoicesCtrl',
        templateUrl: 'admin/invoices.html'
      })
      .state('adminpage', {
        url: '/admin/pages',
        controller: 'pageCtrl',
        templateUrl: 'admin/pages.html'
      })
      .state('addnewpage', {
        url: '/admin/addnewpage',
        controller: 'addNewPage',
        templateUrl: 'admin/addnewpage.html'
      });
      $urlRouterProvider.otherwise('/');
    }
  ]);
