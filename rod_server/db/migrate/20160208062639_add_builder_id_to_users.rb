class AddBuilderIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :builder_id, :integer
  end
end
