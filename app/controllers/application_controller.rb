class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in?

  def current_user
    @current_user ||= User.find_by(uid: session[:user_uid]) if session[:user_uid]
  end

  def logged_in?
    !!current_user
  end

  def render_404
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/404", layout: false, status: :not_found }
      format.any { head :not_found }
    end
  end
end
