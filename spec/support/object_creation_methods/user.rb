def new_user(attributes = {})
  default_attributes = {
    email: 'nathanael.burt@gmail.com',
    password: 'password1234'
  }

  User.new(default_attributes.merge(attributes))
end

def create_user(attributes = {})
  user = new_user(attributes)
  user.save!
  user
end
