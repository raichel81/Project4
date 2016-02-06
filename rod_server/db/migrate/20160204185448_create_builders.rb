class CreateBuilders < ActiveRecord::Migration
  def change
    create_table :builders do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :bio
      t.string :location
      t.float :minprice
      t.float :maxprice
      t.boolean :ship
      t.string :rodtype
      t.string :species
      t.string :poleblank

      t.timestamps null: false
    end
  end
end
