class InvoiceItemsController < ApplicationController
  respond_to :json, :html

  skip_before_action :verify_authenticity_token

  inherit_resources

protected

  def invoice_item_params
    params.require(:invoice_item).permit(:id, :count, :price, :product_id, :size, :color, :order_id)
  end
end
