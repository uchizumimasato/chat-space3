Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups do
    resources :messages, only: [:index, :create]
  end

  namespace :api do
    resources :messages, only: :index, defaults: { format: 'json' }
  end
end
