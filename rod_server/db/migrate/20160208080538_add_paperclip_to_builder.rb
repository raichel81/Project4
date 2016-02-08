class AddPaperclipToBuilder < ActiveRecord::Migration
  def change
    add_attachment :builders, :image 
  end
  
end
