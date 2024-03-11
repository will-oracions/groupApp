from django.urls import path
# from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import DefaultRouter, NestedDefaultRouter
from pprint import pprint

from . import views

router = DefaultRouter()
router.register('regions', views.RegionViewSet, basename='regions')
router.register('communes', views.CommuneViewSet, basename='communes')

commune_router = NestedDefaultRouter(router, 'communes', lookup='commune')
commune_router.register('streets', views.CommuneStreetViewSet,
                        basename='commune-streets')

region_router = NestedDefaultRouter(router, 'regions', lookup='region')
region_router.register(
    'departments', views.RegionDepartmentViewSet, basename='region-departments')

# pprint(commune_router.urls)

urlpatterns = [
    path('test', views.test),

] + router.urls + commune_router.urls + region_router.urls
