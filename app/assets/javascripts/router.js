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
    'md-steppers',
    'pascalprecht.translate'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$translateProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
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

      $translateProvider.translations('en', {
        'ADMIN_WELCOME': 'Welcome!',
        'ADMIN_WELCOME_MESSEGE': 'This admin panel managing your online store. Here you can quickly and easily add items, edit, upload photos, search and perform fine adjustments of the site. All this is very simple and does not require you to special knowledge.',
        'ADMIN_SIDEBAR_MAIN': 'Main',
        'ADMIN_SIDEBAR_PRODUCTS': 'Products',
        'ADMIN_SIDEBAR_CATEGORIES': 'Categories',
        'ADMIN_SIDEBAR_PAGES': 'Pages',
        'ADMIN_SIDEBAR_ORDERS': 'Orders',
        'CHANGE_LANGUAGE_ENGLISH_BUTTON': 'English',
        'CHANGE_LANGUAGE_RUSSIAN_BUTTON': 'Russian',
        'CHANGE_LANGUAGE_UKRAINE_BUTTON': 'Ukraine'
      });
   
      $translateProvider.translations('ru', {
        'ADMIN_WELCOME': 'Добро пожаловать!',
        'ADMIN_WELCOME_MESSEGE': 'Это админ панель управление вашего интернет-магазина. Здесь вы сможете легко и просто добавлять товар, редактировать его, загружать фотографии, категории и проводить тонкие настройки сайта. Все это очень просто и не потребует от вас специальных знаний.',
        'ADMIN_SIDEBAR_MAIN': 'Основное',
        'ADMIN_SIDEBAR_PRODUCTS': 'Товары',
        'ADMIN_SIDEBAR_CATEGORIES': 'Категории',
        'ADMIN_SIDEBAR_PAGES': 'Страницы',
        'ADMIN_SIDEBAR_ORDERS': 'Заказы',
        'CHANGE_LANGUAGE_ENGLISH_BUTTON': 'Английский',
        'CHANGE_LANGUAGE_RUSSIAN_BUTTON': 'Русский',
        'CHANGE_LANGUAGE_UKRAINE_BUTTON': 'Украинский'
      });

      $translateProvider.translations('ua', {
        'ADMIN_WELCOME': 'Ласкаво просимо!',
        'ADMIN_WELCOME_MESSEGE': 'Це адмін панель управління вашого інтернет-магазину. Тут ви зможете легко і просто додавати товар, редагувати його, завантажувати фотографії, категорії і проводити тонкі настройки сайту. Все це дуже просто і не зажадає від вас спеціальних знань.',
        'ADMIN_SIDEBAR_MAIN': 'Основне',
        'CHANGE_LANGUAGE_ENGLISH_BUTTON': 'Англійська',
        'CHANGE_LANGUAGE_RUSSIAN_BUTTON': 'Русский',
        'CHANGE_LANGUAGE_UKRAINE_BUTTON': 'Український'
      });
   
      $translateProvider.preferredLanguage('en');
    }
    
  ]);