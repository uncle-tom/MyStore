class ProductsController < ApplicationController
  respond_to :html, :json

	skip_before_action :verify_authenticity_token

  inherit_resources

protected

	def product_params
		params.require(:product).permit(:id, :name, :description,
			:sale_price, :has_popular, :has_sale, :in_stock, :quantity, 
			:price, :colors, :sizes, :permalink)
	end
end
