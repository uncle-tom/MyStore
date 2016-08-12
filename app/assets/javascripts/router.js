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
    'ngCart',
    'md-steppers'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('home', {
        url: '/', 
        controller: 'mainCtrl',
        templateUrl: 'main/index.html'
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
      .state('categories', {
        url: '/categories/{id}', 
        controller: 'categoryCtrl',
        templateUrl: 'category/show.html'
      })
      .state('about', {
        url: '/about', 
        controller: 'mainCtrl',
        templateUrl: 'main/about.html'
      })
      .state('contact', {
        url: '/contact', 
        controller: 'mainCtrl',
        templateUrl: 'main/contact.html'
      })
      .state('cart', {
        url: '/cart', 
        controller: 'mainCtrl',
        templateUrl: 'cart/cart.html'
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
        templateUrl: 'product/admin/product.html'
      })
      .state('addnewproduct', {
        url: '/admin/addnewproduct',
        controller: 'addNewProduct',
        templateUrl: 'product/admin/addnewproduct.html'
      })
      .state('editproduct', {
        url: '/admin/product/edit/{id}',
        controller: 'productCtrl',
        templateUrl: 'product/admin/productedit.html'
      })
      .state('photos', {
        url: '/admin/product/photos/{id}',
        controller: 'productPhotosCtrl',
        templateUrl: 'photo/admin/product_photos.html'
      })
      .state('editcategory', {
        url: '/admin/category/edit/{id}',
        controller: 'categoryCtrl',
        templateUrl: 'category/admin/categoryedit.html'
      })
      .state('admincategory', {
        url: '/admin/category',
        controller: 'categoryCtrl',
        templateUrl: 'category/admin/category.html'
      })
      .state('addnewcategory', {
        url: '/admin/addnewcategory',
        controller: 'addNewCategory', 
        templateUrl: 'category/admin/addnewcategory.html'
      })
      .state('admininvoices', {
        url: '/admin/invoices',
        controller: 'invoicesCtrl',
        templateUrl: 'cart/admin/invoices.html'
      })
      .state('admininvoiceshow', {
        url: '/admin/invoices/{id}',
        controller: 'invoicesCtrl',
        templateUrl: 'cart/admin/invoiceshow.html'
      })
      .state('adminpage', {
        url: '/admin/pages',
        controller: 'pageCtrl',
        templateUrl: 'page/admin/pages.html'
      })
      .state('addnewpage', {
        url: '/admin/addnewpage',
        controller: 'addNewPage',
        templateUrl: 'page/admin/addnewpage.html'
      });
      $urlRouterProvider.otherwise('/');
    }
  ]);