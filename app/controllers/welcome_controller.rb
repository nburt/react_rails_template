class WelcomeController < ApplicationController
  def index
    if logged_in?
      redirect_to app_path
    end
  end
end
