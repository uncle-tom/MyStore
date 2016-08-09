class AddressesController < ApplicationController
  respond_to :json, :html

  skip_before_action :verify_authenticity_token

  inherit_resources

protected

  def address_params
    params.permit(:id, :user_name, :order_id, :user_phone, :address, :user_email, :address2, 
      :town, :notes)
  end
end
