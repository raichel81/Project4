json.array!(@builders) do |builder|
  json.extract! builder, :id, :name, :email, :phone, :bio, :location, :minprice, :maxprice, :ship, :rodtype, :species, :poleblank
  json.url builder_url(builder, format: :json)
end
