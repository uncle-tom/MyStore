class PhotosController < ApplicationController
  respond_to :html, :json

  skip_before_action :verify_authenticity_token

  inherit_resources

  def create
    if p = Photo.create(photo_params)
      respond_with(p)
    else
      respond_with(p.errors)
    end
  end

protected

  def photo_params
    {product_id: params[:product_id], image: params[:file]}
  end
end
