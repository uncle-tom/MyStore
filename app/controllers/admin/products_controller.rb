class Admin::ProductsController < ApplicationController
  respond_to :json, :html

  def index
    @products = Product.all
    respond_with(@products)
  end
end