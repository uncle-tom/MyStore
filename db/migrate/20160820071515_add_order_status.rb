class AddOrderStatus < ActiveRecord::Migration
  def change
    add_column :orders, :order_status, :string, null: false, default: 'В ожидании'
  end
end
