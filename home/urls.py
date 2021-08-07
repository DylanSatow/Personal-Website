from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('projects', views.projects, name="projects"),
    path('music', views.music, name="music"),
]