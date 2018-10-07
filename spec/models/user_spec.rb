require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { new_user }

  describe 'validations' do
    it 'must have an email' do
      expect(user).to be_valid
      user.email = nil
      expect(user).to_not be_valid
    end

    it 'must have a valid email address' do
      expect(user).to be_valid
      user.email = 'nathanael.burt'
      expect(user).to_not be_valid

      user.email = 'nathanael.burt@gmail.com'
      expect(user).to be_valid
      user.email = 'nathanael.burt@gmail'
      expect(user).to_not be_valid
    end

    it 'must have a unique email' do
      expect(user).to be_valid
      create_user
      expect(user).to_not be_valid
    end

    it 'must have a password' do
      expect(user).to be_valid
      user.password = nil
      expect(user).to_not be_valid
    end

    it 'must have have a password that is 6 characters or longer' do
      expect(user).to be_valid
      user.password = 'pass'
      expect(user).to_not be_valid
    end
  end
end
