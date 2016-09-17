class AddSizesSetka < ActiveRecord::Migration
  def change
  	add_column :products, :sizes_setka, :text
  end
end
