Rails.application.routes.draw do

  scope '/api' do
    devise_for :users
    resources :groups
    resources :builders
    resources :poles
  end

end
