angular
  .module('MyStore')
  .controller('OrdersController', OrdersController);

  function OrdersController($scope, $http, InvoiceItem, Product, Order, $stateParams) {
    Order.query({},function(data){
      $scope.orders = data;
    })

    Product.query({},function(data){
      $scope.products = data;
    })

    $scope.qty = 1;
    $scope.total = 0.0;
    $scope.invoice_items = [];
    $scope.selected_products = [];
    $scope.discount = 0.0;

    $scope.new_order = new Order();

    $scope.deleteOrders = function(id){
      Order.delete({id: id}, function () {
        $('#order_'+id).remove();
      })
    };

    $scope.update = function(){
      var invoice_item = new InvoiceItem();
      
      calculate_total();

      if($scope.new_order.id) {
        save_invoice_items(invoice_item);
      } else {
        $scope.new_order.$save(function(inv) {
          $scope.new_order.id = inv.id;
          save_invoice_items(invoice_item);
        })
      }
      $('#select_product').val('');
      $('#input_qty').val('');
    }

    function save_invoice_items(invoice_item) {
      invoice_item.order_id = $scope.new_order.id;
      
      var parts = $scope.selected_product.split(',');
      invoice_item.product_id = parseInt(parts[0]);
      invoice_item.quantity = $scope.qty;

      invoice_item.$save(function(inv_item) {
        invoice_item.id = inv_item.id;
        $scope.invoice_items.push(invoice_item);

        $scope.selected_products.push({
          product_id: parseInt(parts[0]),
          name: parts[2],
          price: parseFloat(parts[1]),
          qty: $scope.qty
        });
      });
    }

    $scope.changeQty = function(product_id, operation = '+') {
      for(var i = 0; i < $scope.selected_products.length; i+=1) {
        if($scope.selected_products[i].product_id == product_id) {
          if(operation == '+') {
            $scope.selected_products[i].qty += 1; 
          } else {
            $scope.selected_products[i].qty -= 1; 
          }
        }
      }

      for(var i = 0; i < $scope.invoice_items.length; i+=1) {
        if($scope.invoice_items[i].product_id == product_id) {
          var inv_item = $scope.invoice_items[i];
          if(operation == '+') {
            inv_item.quantity += 1; 
          } else {
            inv_item.quantity -= 1; 
          }
          
          inv_item.$update();
        }
      }

      calculate_total();
    }

    $scope.update_customer = function() {
      $scope.new_invoice.customer_id = $scope.selected_customer;

      if($scope.new_order.id) {
        $scope.new_order.$update();
      } else {
        $scope.new_order.$save(function(inv) {
          $scope.new_order.id = inv.id;
        })
      }
    }

    $scope.apply_discount = function() {
      calculate_total();
    }

    function total_with_discount(total) {
      var discount_value = (total / 100.0) * $scope.discount;
      return total - discount_value;
    }

    function calculate_total(){
      var subtotal = calculate_subtotal();
      
      if($scope.discount > 0.0) {
        $scope.total = total_with_discount(subtotal);
        $scope.new_order.discount = $scope.discount;
      } else {
        $scope.total = subtotal;
      }
      
      $scope.new_order.total = $scope.total;
      $scope.new_order.$update();

      return $scope.total;
    }

    function calculate_subtotal() {
      var subtotal = 0;

      $.map($scope.selected_products, function(product) {
        subtotal += product.price * product.qty;
      })

      return subtotal;
    }
  }
