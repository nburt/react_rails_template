def sign_in_user(user)
  visit(new_session_path)
  fill_in 'user[email]', with: user.email
  fill_in 'user[password]', with: user.password
  click_button 'Sign In'
end

def request_user_sign_in(user)
  post sessions_path, params: {user: {email: user.email, password: user.password}}
end
