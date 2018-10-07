class AuthenticatedController < ApplicationController
  before_action :authenticate_user

  private def authenticate_user
    unless logged_in?
      session[:return_to] = request.original_url
      if request.content_type == 'application/json'
        render status: 401, json: {}
      else
        redirect_to new_session_path
      end
    end
  end
end
