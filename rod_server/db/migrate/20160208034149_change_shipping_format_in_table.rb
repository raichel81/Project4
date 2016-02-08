class ChangeShippingFormatInTable < ActiveRecord::Migration
  def change
    change_column :builders, :ship, :string
  end
end
