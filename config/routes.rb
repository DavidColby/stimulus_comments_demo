Rails.application.routes.draw do
  resources :projects do
    resources :comments, only: [:create]
  end
  root to: 'projects#index'
end
