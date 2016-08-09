class AddUserDetailsToAddresses < ActiveRecord::Migration
  def change
    add_column :addresses, :user_name, :string, null: false, default: '' 
    add_column :addresses, :user_phone, :string, null: false, default: ''
    add_column :addresses, :user_email, :string, null: false, default: ''
  end
end
