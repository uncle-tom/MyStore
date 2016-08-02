class CategoriesController < ApplicationController
  respond_to :html, :json

	skip_before_action :verify_authenticity_token

  inherit_resources

  def show
    @category = Category.find_by name: params[:id]
    @products = @category.products
    respond_with(@products)
  end

protected

	def category_params
		params.require(:category).permit(:id, :name, :parent_id)
	end
end
