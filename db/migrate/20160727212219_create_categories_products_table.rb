class CreateCategoriesProductsTable < ActiveRecord::Migration
  def change
    create_table :categories_products, id: false do |t|
    	t.integer :category_id, null: false
    	t.integer :product_id, null: false
    end
  end
end
