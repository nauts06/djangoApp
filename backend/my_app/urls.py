from django.urls import path
from .views import product , product_detail ,profile

from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView )

urlpatterns =[
    path('products', product, name='product'),
     path('products/<int:id>', product_detail),
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/',TokenRefreshView.as_view()),
    path('profile', profile)
]