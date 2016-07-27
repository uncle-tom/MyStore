class CategoriesController < ApplicationController
  respond_to :html, :json

	skip_before_action :verify_authenticity_token

  inherit_resources

protected

	def product_params
		params.require(:category).permit(:id, :name, :parent_id)
	end
end
