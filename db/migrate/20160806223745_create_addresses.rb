class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :order_id

      t.string :country
      t.string :town
      t.string :zip
      t.string :address
      t.string :address2

      t.string :nova_poshta_id

      t.text   :notes

      t.timestamps null: false
    end

    add_index :addresses, :order_id
  end
end
