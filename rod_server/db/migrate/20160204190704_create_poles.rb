class CreatePoles < ActiveRecord::Migration
  def change
    create_table :poles do |t|
      t.string :name
      t.string :rodmodel
      t.string :picture
      t.string :type
      t.number :length
      t.number :pieces
      t.number :lureweight
      t.number :lineweight
      t.number :pricerange
      t.string :power

      t.timestamps null: false
    end
  end
end
