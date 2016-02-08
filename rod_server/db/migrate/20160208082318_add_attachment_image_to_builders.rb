class AddAttachmentImageToBuilders < ActiveRecord::Migration
  def self.up
    change_table :builders do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :builders, :image
  end
end
