from django.urls import path
from .views import RaceListView, race_detail, UnitDetailView, AllUnitList
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('race/<slug:race_name_slug>/', views.race_detail, name='race-detail'),
    path('race/<slug:race_name_slug>/unit/<slug:slug>/', UnitDetailView.as_view(), name='unit-detail'),
    path('search/', AllUnitList.as_view(), name='search'),
    path('unit/<slug:slug>', UnitDetailView.as_view(), name='separate-unit-detail'),
    path('compare/', views.about, name='compare'),
    path('trying/', views.trying, name='trying'),
    path('api/', views.UnitAPIListView.as_view(), name='unit-list'),
    path('example/', views.example, name='example'),
]

