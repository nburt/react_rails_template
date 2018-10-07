require 'rails_helper'

feature 'Homepage', type: :feature do
  scenario 'a user is redirected to the dashboard if they are already signed in' do
    sign_in_user(create_user)

    visit '/'

    expect(page.current_path).to eq('/app')
  end

  context 'signing up for an account' do
    scenario 'a user can create an account' do
      visit '/users/new'

      fill_in 'user[email]', with: 'nate@email.com'
      fill_in 'user[password]', with: 'password1'

      click_button 'Sign Up'

      expect(User.count).to eq(1)
      expect(page.current_path).to eq('/app')
    end

    scenario 'a user receives errors for incorrect registration' do
      visit '/users/new'
      click_button 'Sign Up'

      expect(page).to have_content('Email can\'t be blank.')
      expect(page).to have_content('Password can\'t be blank.')
    end
  end

  context 'signing into an account' do
    scenario 'a user can signup with their existing account credentials' do
      user = create_user
      visit '/sessions/new'

      fill_in 'user[email]', with: user.email
      fill_in 'user[password]', with: user.password

      click_button 'Sign In'

      expect(page.current_path).to eq('/app')
    end

    scenario 'a user is shown an error if they enter invalid credentials' do
      create_user
      visit '/sessions/new'

      fill_in 'user[email]', with: 'nah'
      fill_in 'user[password]', with: 'nah'

      click_button 'Sign In'

      expect(page).to have_content 'Invalid email or password'
    end
  end
end
