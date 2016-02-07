class AddUserIdToBuilders < ActiveRecord::Migration
  def change
    add_column :builders, :user_id, :integer
  end
end
