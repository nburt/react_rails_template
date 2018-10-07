class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(create_user_params)

    if @user.save
      session[:user_uid] = @user.uid
      if session[:return_to]
        return_to = session.delete(:return_to)
        redirect_to return_to
      else
        redirect_to app_url
      end
    else
      render :new
    end
  end

  private def create_user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
