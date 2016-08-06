class CreateInvoiceItems < ActiveRecord::Migration
  def change
    create_table :invoice_items do |t|
      t.integer :order_id, null: false
      t.integer :product_id, null: false
      t.string :color
      t.string :size
      t.decimal :price, null: false
      t.integer :count, default: 1

      t.timestamps null: false
    end

    add_index :invoice_items, :order_id
    add_index :invoice_items, [:order_id, :product_id]
  end
end
