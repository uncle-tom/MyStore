class ProductsController < ApplicationController
  respond_to :html, :json
	skip_before_action :verify_authenticity_token
  inherit_resources
  protected
	def product_params
		params.require(:product).permit(:id, :name, :price, :colors, 
      :sizes, :permalink)
	end
end
