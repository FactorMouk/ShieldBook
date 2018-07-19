from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('home/', views.home, name='home'),
    path('shields/', views.shields, name='shields'),
    path('create/', views.createShield, name='createshield'),
    path('popular/', views.popular, name='popular'),
    path('news/', views.news, name='news'),
    path('releases/', views.releases, name='releases'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('settings/', views.settings, name='settings'),
] 