class ProductsController < ApplicationController
  respond_to :html, :json

	skip_before_action :verify_authenticity_token

  inherit_resources

  def index
    index! do |format|
      format.html { render }
      format.json do
        render json: @products.as_json(methods: :cover_url, include: {photos: {}, categories: {}})
      end
    end
  end

  def show
    show! do |format|
      format.html { render }
      format.json do
        render json: resource.as_json(methods: :cover_url, include: {photos: {}, categories: {}})
      end
    end
  end

  def create
    create! do |success, failure|
      success.json do
        Photo.create image: params[:file], product_id: resource.id
        render json: resource 
      end
      failure.json { render json: @article.errors, status: 422 }
    end
  end

protected

	def product_params
		params.require(:product).permit(:id, :name, :description,
			:sale_price, :has_popular, :has_sale, :in_stock, :quantity, 
			:price, :colors, :sizes, :permalink, :cover_photo_id, :category_ids, category_ids:[])
	end
end
