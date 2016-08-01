class AddCoverPhotoIdToProducts < ActiveRecord::Migration
  def change
    add_column :products, :cover_photo_id, :integer
  end
end
