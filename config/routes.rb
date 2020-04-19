Rails.application.routes.draw do
  devise_for :users
  get 'home/index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :dashboard, only: :index
      resources :search, only: :index
      resources :categories, only: %i[index show]
    end
  end

  root to: 'home#index'
end
