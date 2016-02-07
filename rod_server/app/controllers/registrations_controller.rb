class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_filter :configure_permitted_parameters

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up).push(:username)
  end
end