class ShippingsController < ApplicationController
  respond_to :json, :html

  inherit_resources

protected

  def shipping_params
    params.require(:shipping).permit(:id, :name, :price, :speed_of_delivery, :is_international)
  end
end
