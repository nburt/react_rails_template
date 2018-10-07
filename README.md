# README

## Getting Started
1. Clone the repository
1. Install Ruby dependencies with `bundle install` 
1. Install JS dependencies with `yarn install`
1. Create databases for dev and test `bundle exec rake db:create db:migrate`
1. Replace the error email address in `defaultErrorBoundary.js`

## Development
1. Run dev server with `yarn start`
1. Run Ruby specs with `rspec`
1. Run JS specs with `yarn test`


## Production
1. Update the `API_HOST` constant in `config/webpack/production.js`