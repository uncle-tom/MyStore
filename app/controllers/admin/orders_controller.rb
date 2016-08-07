class Admin::OrdersController < ApplicationController
  respond_to :json, :html

  def index
    @orders = Order.all
    respond_with(@orders)
  end
end
