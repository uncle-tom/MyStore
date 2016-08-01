Rails.application.routes.draw do
  resources :products do
    resources :photos
  end

  resources :categories

  root 'test#index'
end
