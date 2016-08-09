class AddPaymentTypeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :payment_type, :string, {null: false, default: 'Оплата при получении'}
  end
end
