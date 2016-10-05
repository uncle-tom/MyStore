class Product < ActiveRecord::Base
  serialize :sizes, Array
  serialize :colors, Array

  has_many :photos
  has_and_belongs_to_many :categories
  
  def cover_url
    if self.cover_photo_id
      Photo.find_by(id:self.cover_photo_id).try(:image).try(:url)
    end
  end
end
