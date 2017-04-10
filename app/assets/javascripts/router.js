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
        templateUrl: 'main/index.html',
        data: {
          reviews: [{
            name:"Жанна *ZhAs* Асонова",
            photo: "https://pp.vk.me/c620116/v620116649/18d05/VDf1OvAEj9I.jpg",
            description: "Сегодня вновь стала обладательницей парочки шикарных комплектов и трусиков-слипов, все как всегда отлично: качество, помощь при выборе, доставка, последнее просто моментально- сегодня заказ, завтра уже курьер на пороге😌 спасибо огромное! Успехов Вам!"
          }, 
            {
              name:"Олеся Карпухина",
              photo: "assets/reviews/review1.jpg",
              description: "Заказывала комплект и х/б трусики!!Все очень хорошего качества, размер подошел отлично!!👍 Долго сомневалась, но потом все же решила заказать😊 Большое спасибо,Саше за помощь!! Так что кого гложат сомнения-не сомневайтесь!! У Саши все отлично!!😊"
            },
            {
              name:"Маргарита Чернышева",
              photo: "assets/reviews/review2.jpg",
              description: "На днях купила комплектик! Качество хорошее, кружева очень мягкие (не церапают, не раздражают). Ношу 75B, взяла размер в размер (75B). Сидит идеально, смотрится эффектно. Теперь сестра такой же хочет😀 Девчонки, берите, не сомневайтесь!"
            },
            {
              name:"Ольга Поручник",
              photo: "assets/reviews/review3.jpg",
              description: "Спасибо огромное! Сегодня получила свой комплект) Всё подошло идеально! Мягкое кружево, приятное к телу. Больше всего переживала за бюст, но зря. Держит прекрасно! Девочки, заказывайте смело👍 Саше огромное спасибо!"
            }
          ]
        },
        resolve: {
          products: function($http) {
            return $http.get('/products.json').then(function (response) {
              console.log('response.data', response.data);
              return response.data;
            });
          }
        }
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
        templateUrl: 'admin/index.html',
        resolve: {
          isAdmin: () => {
            return localStorage.getItem('candyladyshop.isAdmin')
          }
        },
        controller: function ($state, isAdmin) {
          if(!isAdmin) {
            $state.go('home');
          }
        }
      })
      .state('admin.main', {
        url: '/admin/main',
        controller: 'adminCtrl',
        templateUrl: 'admin/main.html'
      })
      .state('admin.product', {
        url: '/product',
        controller: 'productCtrl',
        templateUrl: 'product/admin/product.html'
      })
      .state('admin.addnewproduct', {
        url: '/addnewproduct',
        controller: 'addNewProduct',
        templateUrl: 'product/admin/addnewproduct.html'
      })
      .state('admin.editproduct', {
        url: '/product/edit/{id}',
        controller: 'productCtrl',
        templateUrl: 'product/admin/productedit.html'
      })
      .state('admin.photos', {
        url: '/product/photos/{id}',
        controller: 'productPhotosCtrl',
        templateUrl: 'photo/admin/product_photos.html'
      })
      .state('admin.editcategory', {
        url: '/category/edit/{id}',
        controller: 'editCategoryCtrl',
        templateUrl: 'category/admin/categoryedit.html'
      })
      .state('admin.category', {
        url: '/category',
        controller: 'categoryCtrl',
        templateUrl: 'category/admin/category.html'
      })
      .state('admin.addnewcategory', {
        url: '/addnewcategory',
        controller: 'addNewCategory', 
        templateUrl: 'category/admin/addnewcategory.html'
      })
      .state('admin.invoices', {
        url: '/invoices',
        controller: 'invoicesCtrl',
        templateUrl: 'cart/admin/invoices.html'
      })
      .state('admin.invoiceshow', {
        url: '/invoices/{id}',
        controller: 'invoicesCtrl',
        templateUrl: 'cart/admin/invoiceshow.html'
      })
      .state('admin.sendemail', {
        url: '/sendemail',
        controller: 'sendemailCtrl',
        templateUrl: 'sendemail/admin/sendemail.html'
      })
      .state('admin.page', {
        url: '/pages',
        controller: 'pageCtrl',
        templateUrl: 'page/admin/pages.html'
      })
      .state('admin.addnewpage', {
        url: '/addnewpage',
        controller: 'addNewPage',
        templateUrl: 'page/admin/addnewpage.html'
      });
      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $translateProvider.translations('en', {
        'ADMIN_WELCOME': 'Welcome!',
        'ADMIN_WELCOME_MESSEGE': 'This admin panel managing your online store. Here you can quickly and easily add items, edit, upload photos, search and perform fine adjustments of the site. All this is very simple and does not require you to special knowledge.',
        
        'ADMIN_SEARCH': 'Search',
        
        'ADMIN_MAIN_SECTION_TITLE': 'The main section',
        'ADMIN_MAIN_SECTION_NAME_SITE': 'Name of the site',
        'ADMIN_MAIN_SECTION_TEXT_MAIN_PAGE': 'The text for the home page',
        'ADMIN_MAIN_SECTION_CONTACTS': 'Contacts',
        'ADMIN_MAIN_SECTION_CONTACTS_PHONE': 'Phone number',
        'ADMIN_MAIN_SECTION_CONTACTS_EMAIL': 'Contact email',
        'ADMIN_MAIN_SECTION_SOCIAL': 'Social networks',
        'ADMIN_MAIN_SECTION_SOCIAL_VK': 'VK',
        'ADMIN_MAIN_SECTION_SOCIAL_FACEBOOK': 'Facebook',
        'ADMIN_MAIN_SECTION_SOCIAL_INTAGRAM': 'Instagram',
        'ADMIN_MAIN_SECTION_BUTTON': 'Update',
        
        'ADMIN_PRODUCT_LIST': 'List of products',
        
        'ADMIN_PRODUCT_ADD_POPULAT': 'A popular product?',
        'ADMIN_PRODUCT_ADD_STOCK': 'Are available?',
        'ADMIN_PRODUCT_ADD_TITLE': 'Adding new products',
        'ADMIN_PRODUCT_ADD_CHOOSE_CATEGORY': 'Select a category',
        'ADMIN_PRODUCT_ADD_DESCRIPTION': 'Product description',
        'ADMIN_PRODUCT_ADD_COLOR': 'Color',
        'ADMIN_PRODUCT_ADD_SIZES': 'Size',
        'ADMIN_PRODUCT_ADD_SETKA': 'Size chart',
        'ADMIN_PRODUCT_ADD_SALE': 'Discount price',
        'ADMIN_PRODUCT_ADD_HAS_SALE': 'There is a discount?',
        'ADMIN_PRODUCT_ADD_PRICE': 'Price',
        'ADMIN_PRODUCT_ADD_NAME': 'Product Name',
        'ADMIN_PRODUCT_ADD_URL': 'Articul',
        'ADMIN_PRODUCT_ADD_PHOTOLIST': 'Product photos',
        'ADMIN_PRODUCT_ADD_PHOTO': 'Add photos',

        'ADMIN_PRODUCT_EDIT_TITLE': 'Edit product',
        'ADMIN_PRODUCT_EDIT_BUTTON': 'Update product',
        
        'ADMIN_PRODUCT_BUTTON_ADD': 'Add the product',
        'ADMIN_PRODUCT_BUTTON_EDIT': 'Edit',
        'ADMIN_PRODUCT_BUTTON_PHOTOALBUM': 'Album',
        'ADMIN_PRODUCT_BUTTON_DELETE': 'Delete',

        'ADMIN_CATEGORY_LIST': 'List categories',
        'ADMIN_CATEGORY_EDIT': 'Edit',
        'ADMIN_CATEGORY_DELETE': 'Delete',

        'ADMIN_CATEGORY_BUTTON_ADD': 'Add category',
        'ADMIN_CATEGORY_ADD_TITLE': 'Add a new category',
        'ADMIN_CATEGORY_ADD_NAME': 'Name of category',
        'ADMIN_CATEGORY_ADD_PARENT': 'Parent category',
        'ADMIN_CATEGORY_ADD_SELECT_PARENT': 'Select the parent category',
        'ADMIN_CATEGORY_BUTTON_ADD': 'Add category',

        'ADMIN_CATEGORY_EDIT_TITLE': 'Editing a category',
        'ADMIN_CATEGORY_EDIT_BUTTON': 'Edit category',

        'ADMIN_ORDER_LIST': 'Order list',
        'ADMIN_ORDER_NUMBER': 'Order number',
        'ADMIN_ORDER_PRODUCT_NAME': 'Number of ordered products',
        'ADMIN_ORDER_TIME': 'Lead time',
        'ADMIN_ORDER_STATUS': 'Status',
        'ADMIN_ORDER_QTY': 'QTY',
        'ADMIN_ORDER_INFO': 'Info',
        'ADMIN_ORDER_NAME': 'Name',
        'ADMIN_ORDER_PHONE': 'Phone',
        'ADMIN_ORDER_EMAIL': 'Email',
        'ADMIN_ORDER_CITY': 'City',
        'ADMIN_ORDER_ADDRESS': 'Address',
        'ADMIN_ORDER_PAYMENT_TYPE': 'Payment method',
        'ADMIN_ORDER_NOTES': 'Notes',
        'ADMIN_ORDER_BUTTON_STATUS_DELETE': 'Delete',
        'ADMIN_ORDER_BUTTON_STATUS_SUCCESS': 'To accept',
        'ADMIN_ORDER_BUTTON_STATUS_COMPLETED': 'Completed',
        'ADMIN_ORDER_STATUS_WAIT': 'Wait',
        'ADMIN_ORDER_STATUS_WORK': 'In progress',
        'ADMIN_ORDER_STATUS_DONE': 'Done',

        'ADMIN_SIDEBAR_MAIN': 'Main',
        'ADMIN_SIDEBAR_PRODUCTS': 'Products',
        'ADMIN_SIDEBAR_CATEGORIES': 'Categories',
        'ADMIN_SIDEBAR_PAGES': 'Pages',
        'ADMIN_SIDEBAR_ORDERS': 'Orders',
        'ADMIN_SIDEBAR_SEND_EMAIL': 'Send Email',

        'ADMIN_SEND_EMAIL_BUTTON_ADD': 'Send Emails',
        'ADMIN_SEND_EMAIL_LIST': 'List of sent messages:',

        'ADMIN_HEADER_ON_SITE': 'Site',
        'ADMIN_HEADER_ON_ADMIN': 'Admin Panel',

        'ADMIN_SORTED_BY': 'Sort by',
        'ADMIN_SORTED_BY_NAME': 'Name',
        'ADMIN_SORTED_BY_DATE': 'Date',
        'ADMIN_SORTED_BY_PRICE': 'Price',
        'ADMIN_SORTED_BY_CATEGORIES': 'Show products from the category',

        'CHANGE_LANGUAGE_ENGLISH_BUTTON': 'English',
        'CHANGE_LANGUAGE_RUSSIAN_BUTTON': 'Russian',
        'CHANGE_LANGUAGE_UKRAINE_BUTTON': 'Ukraine'
      });
   
      $translateProvider.translations('ru', {
        'ADMIN_WELCOME': 'Добро пожаловать!',
        'ADMIN_WELCOME_MESSEGE': 'Это админ панель управление вашего интернет-магазина. Здесь вы сможете легко и просто добавлять товар, редактировать его, загружать фотографии, категории и проводить тонкие настройки сайта. Все это очень просто и не потребует от вас специальных знаний.',
        
        'ADMIN_SEARCH': 'Поиск',
        
        'ADMIN_MAIN_SECTION_TITLE': 'Основной раздел',
        'ADMIN_MAIN_SECTION_NAME_SITE': 'Название сайта',
        'ADMIN_MAIN_SECTION_TEXT_MAIN_PAGE': 'Текст для главной страницы',
        'ADMIN_MAIN_SECTION_CONTACTS': 'Контакты',
        'ADMIN_MAIN_SECTION_CONTACTS_PHONE': 'Номер телефона',
        'ADMIN_MAIN_SECTION_CONTACTS_EMAIL': 'Контактный email',
        'ADMIN_MAIN_SECTION_SOCIAL': 'Социальные сети',
        'ADMIN_MAIN_SECTION_SOCIAL_VK': 'Ссылка VK',
        'ADMIN_MAIN_SECTION_SOCIAL_FACEBOOK': 'Ссылка Facebook',
        'ADMIN_MAIN_SECTION_SOCIAL_INTAGRAM': 'Ссылка Instagram',
        'ADMIN_MAIN_SECTION_BUTTON': 'Обновить информацию',
        
        'ADMIN_PRODUCT_LIST': 'Список товаров',
        
        'ADMIN_PRODUCT_ADD_POPULAT': 'Популярный товар?',
        'ADMIN_PRODUCT_ADD_STOCK': 'Есть в наличии?',
        'ADMIN_PRODUCT_ADD_TITLE': 'Добавление нового товара',
        'ADMIN_PRODUCT_ADD_CHOOSE_CATEGORY': 'Выберите категории',
        'ADMIN_PRODUCT_ADD_DESCRIPTION': 'Описание товара',
        'ADMIN_PRODUCT_ADD_COLOR': 'Цвет',
        'ADMIN_PRODUCT_ADD_SIZES': 'Размер',
        'ADMIN_PRODUCT_ADD_SETKA': 'Размерная сетка',
        'ADMIN_PRODUCT_ADD_SALE': 'Цена со скидкой',
        'ADMIN_PRODUCT_ADD_HAS_SALE': 'Есть скидка?',
        'ADMIN_PRODUCT_ADD_PRICE': 'Цена',
        'ADMIN_PRODUCT_ADD_NAME': 'Название товара',
        'ADMIN_PRODUCT_ADD_URL': 'Артикул товара',
        'ADMIN_PRODUCT_ADD_PHOTO': 'Добавить фотографии',
        'ADMIN_PRODUCT_ADD_PHOTOLIST': 'Фотографии товара',
        
        'ADMIN_PRODUCT_EDIT_TITLE': 'Редактирование товара',
        'ADMIN_PRODUCT_EDIT_BUTTON': 'Обновить товар',
        
        'ADMIN_PRODUCT_BUTTON_ADD': 'Добавить товар',
        'ADMIN_PRODUCT_BUTTON_EDIT': 'Редактировать',
        'ADMIN_PRODUCT_BUTTON_PHOTOALBUM': 'Фотоальбом',
        'ADMIN_PRODUCT_BUTTON_DELETE': 'Удалить',

        'ADMIN_CATEGORY_LIST': 'Список категорий',
        'ADMIN_CATEGORY_EDIT': 'Редактировать',
        'ADMIN_CATEGORY_DELETE': 'Удалить',

        'ADMIN_CATEGORY_BUTTON_ADD': 'Добавить категорию',
        'ADMIN_CATEGORY_ADD_TITLE': 'Добавление новой категории',
        'ADMIN_CATEGORY_ADD_NAME': 'Название категории',
        'ADMIN_CATEGORY_ADD_PARENT': 'Родительская категория',
        'ADMIN_CATEGORY_ADD_SELECT_PARENT': 'Выберите родительскую категорию',
        'ADMIN_CATEGORY_BUTTON_ADD': 'Добавить категорию',

        'ADMIN_CATEGORY_EDIT_TITLE': 'Редактирование категории',
        'ADMIN_CATEGORY_EDIT_BUTTON': 'Редактировать категорию',

        'ADMIN_ORDER_LIST': 'Список заказов',
        'ADMIN_ORDER_NUMBER': 'Номер заказа',
        'ADMIN_ORDER_PRODUCT_NAME': 'Кол-во заказанных товаров',
        'ADMIN_ORDER_TIME': 'Время заказа',
        'ADMIN_ORDER_STATUS': 'Статус',
        'ADMIN_ORDER_QTY': 'Кол-во',
        'ADMIN_ORDER_INFO': 'Информация о заказе',
        'ADMIN_ORDER_NAME': 'Имя',
        'ADMIN_ORDER_PHONE': 'Телефон',
        'ADMIN_ORDER_EMAIL': 'Email',
        'ADMIN_ORDER_CITY': 'Город',
        'ADMIN_ORDER_ADDRESS': 'Адрес',
        'ADMIN_ORDER_PAYMENT_TYPE': 'Способ оплаты',
        'ADMIN_ORDER_NOTES': 'Заметки',
        'ADMIN_ORDER_BUTTON_STATUS_DELETE': 'Удалить',
        'ADMIN_ORDER_BUTTON_STATUS_SUCCESS': 'Принять',
        'ADMIN_ORDER_BUTTON_STATUS_COMPLETED': 'Завершено',
        'ADMIN_ORDER_STATUS_WAIT': 'В ожидании',
        'ADMIN_ORDER_STATUS_WORK': 'Выполняется',
        'ADMIN_ORDER_STATUS_DONE': 'Завершено',

        'ADMIN_SIDEBAR_MAIN': 'Основное',
        'ADMIN_SIDEBAR_PRODUCTS': 'Товары',
        'ADMIN_SIDEBAR_CATEGORIES': 'Категории',
        'ADMIN_SIDEBAR_PAGES': 'Страницы',
        'ADMIN_SIDEBAR_ORDERS': 'Заказы',
        'ADMIN_SIDEBAR_SEND_EMAIL': 'Рассылка',

        'ADMIN_SEND_EMAIL_BUTTON_ADD': 'Новая рассылка',
        'ADMIN_SEND_EMAIL_LIST': 'Список отправленных рассылок:',

        'ADMIN_HEADER_ON_SITE': 'На сайт',
        'ADMIN_HEADER_ON_ADMIN': 'Админка',

        'ADMIN_SORTED_BY': 'Сортировка по',
        'ADMIN_SORTED_BY_NAME': 'Имени',
        'ADMIN_SORTED_BY_DATE': 'Дате',
        'ADMIN_SORTED_BY_PRICE': 'Цене',
        'ADMIN_SORTED_BY_CATEGORIES': 'Показать продукты из категории',
        
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
   
      $translateProvider.preferredLanguage('ru');
    }
    
  ]);
