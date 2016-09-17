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
      resource.categories = Category.where("id IN (?)", params[:categories_ids])
      success.json do
        render json: resource 
      end
      failure.json { render json: @article.errors, status: 422 }
    end
  end

  def update
    resource.categories = Category.where("id IN (?)", params[:product][:categories_ids])
    params[:product].delete(:categories_ids)
    update! do |success, failure|
      success.json do
        render json: resource 
      end
      failure.json { render json: @article.errors, status: 422 }
    end
  end

protected

	def product_params
		params.require(:product).permit(:id, :name, :description,
			:sale_price, :has_popular, :has_sale, :in_stock, :quantity,
			:price, :permalink, :cover_photo_id, :categories_ids, categories:[], 
      categories_ids:[], sizes:[], colors:[], sizes_setka:[])
	end
end
