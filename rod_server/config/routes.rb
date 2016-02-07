Rails.application.routes.draw do

  scope '/api' do
    devise_for :users, :controllers => { :registrations => "registrations" }
    resources :groups
    resources :builders
  end

end
  