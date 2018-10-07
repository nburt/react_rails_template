source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'dotenv-rails', '~> 2.5'
gem 'oj', '~> 3.6', '>= 3.6.11'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.1'
gem 'react_on_rails', '~> 11.1', '>= 11.1.6'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'typhoeus', '~> 1.3'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 3.5', '>= 3.5.5'

group :development, :test do
  gem 'rspec-rails', '~> 3.8'
  gem 'pry', '~> 0.11.3'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 3.9'
  gem 'selenium-webdriver', '~> 3.14', '>= 3.14.1'
  gem 'database_cleaner', '~> 1.7'
  gem 'vcr', '~> 4.0.0'
  gem 'webmock', '~> 3.4', '>= 3.4.2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'mini_racer', platforms: :ruby
