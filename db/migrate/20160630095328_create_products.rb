class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|

      t.string  :name, null: false
      t.text    :description
      t.string  :permalink  # "t-mobile-g2"
      t.decimal :price

      t.text   :sizes
      t.text   :colors

      t.decimal :sale_price
      t.boolean :has_popular
      t.boolean :has_sale
      t.boolean :in_stock, default: true
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
