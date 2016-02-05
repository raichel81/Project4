class CreatePoles < ActiveRecord::Migration
  def change
    create_table :poles do |t|
      t.string :name
      t.string :rodmodel

      t.timestamps null: false
    end
  end
end
