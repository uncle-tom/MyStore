class InvoiceItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product

  def product_name
    self.product.try(:name)
  end
end
