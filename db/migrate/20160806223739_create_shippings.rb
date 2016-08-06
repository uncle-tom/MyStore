class CreateShippings < ActiveRecord::Migration
  def change
    create_table :shippings do |t|
      t.string :name
      t.decimal :price
      t.string :speed_of_delivery
      t.boolean :is_international
      
      t.timestamps null: false
    end
  end
end
