class Product < ActiveRecord::Base
  serialize :sizes, Array
  serialize :colors, Array

  has_many :photos
  has_many :categories
  
end
