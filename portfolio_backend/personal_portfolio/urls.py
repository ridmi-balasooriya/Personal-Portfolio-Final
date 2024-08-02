from django.urls import path
from . import views

urlpatterns = [
    path('data/', views.home, name='home'),
    path('get-csrf-token/', views.get_csrf_token, name='get-csrf-token'),
    path('sendmessage/', views.sendmessage, name='sendmessage')
]
