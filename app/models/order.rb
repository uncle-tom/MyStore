class Order < ActiveRecord::Base
  has_many :invoice_items
  
  has_one :address
  has_one :shipping
end
