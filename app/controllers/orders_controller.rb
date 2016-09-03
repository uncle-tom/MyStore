class OrdersController < ApplicationController
  respond_to :json, :html

  skip_before_action :verify_authenticity_token

  inherit_resources

  def index
    index! do |format|
      format.html { render }
      format.json do
        render json: @orders.as_json(include: {invoice_items: {methods: :product_name}, address: {}})
      end
    end
  end

  def show
    show! do |format|
      format.html { render }
      format.json do
        render json: @order.as_json(include: {invoice_items: {methods: :product_name}, address: {}})
      end
    end
  end

protected

  def order_params
    params.permit(:id, :subtotal, :total, :discount, :address_id, 
      :shipping_id, :user_id, :payment_type, :order_status)
  end
end
