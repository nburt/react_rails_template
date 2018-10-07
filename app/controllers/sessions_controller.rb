class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by(email: session_params[:email])

    if @user.present? && @user.authenticate(session_params[:password])
      session[:user_uid] = @user.uid
      if session[:return_to]
        return_to = session.delete(:return_to)
        redirect_to return_to
      else
        redirect_to app_path
      end
    else
      flash[:danger] = 'Invalid email or password'
      @user = User.new(email: session_params[:email])
      render :new
    end
  end

  private def session_params
    params.require(:user).permit(:email, :password)
  end
end
