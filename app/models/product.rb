class Product < ActiveRecord::Base
  serialize :sizes, Array
  serialize :colors, Array

  has_many :photos
  has_and_belongs_to_many :categories
  
end
