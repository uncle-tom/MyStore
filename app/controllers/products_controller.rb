class ProductsController < ApplicationController
  respond_to :html, :json

  inherit_resources
end
