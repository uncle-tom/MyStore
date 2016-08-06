class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.decimal :subtotal
      t.decimal :total
      t.decimal :discount

      t.integer :address_id
      t.integer :user_id

      t.integer :shipping_id

      t.timestamps null: false
    end

    add_index :orders, :user_id
  end
end
