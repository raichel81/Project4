class RemoveEmailFromBuilder < ActiveRecord::Migration
  def change
    remove_column :builders, :email, :string
  end
end
