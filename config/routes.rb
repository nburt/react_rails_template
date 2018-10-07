Rails.application.routes.draw do
  root 'welcome#index'

  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  # FE routing
  get '/app', as: :app, to: 'frontend_app#index'
  get '/app/*other', to: 'frontend_app#index'
end
