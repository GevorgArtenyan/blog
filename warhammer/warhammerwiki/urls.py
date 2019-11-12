from django.urls import path
from .views import RaceListView, race_detail, UnitDetailView
from . import views
urlpatterns = [
    path('', RaceListView.as_view(), name='home'),
    path('race/<slug:race_name_slug>/', views.race_detail, name='race-detail'),
    path('race/<slug:race_name_slug>/unit/<slug:slug>/', UnitDetailView.as_view(), name='unit-detail')

]