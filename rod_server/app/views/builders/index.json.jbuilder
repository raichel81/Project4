json.array!(@builders) do |builder|
  json.extract! builder, :id, :name, :phone, :bio, :location, :minprice, :maxprice, :ship, :rodtype, :species, :poleblank, :user_id, :image_url
  json.url builder_url(builder, format: :json)
end
