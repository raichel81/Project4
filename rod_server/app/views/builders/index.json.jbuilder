json.array!(@builders) do |builder|
  json.extract! builder, :id, :name, :email, :phone, :bio
  json.url builder_url(builder, format: :json)
end
