from django.urls import path
from . import views

urlpatterns = [
    path('', views.getPlayerById, name="getPlayerById")
]