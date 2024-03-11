from django.urls import path
# from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import DefaultRouter, NestedDefaultRouter
from pprint import pprint

from . import views

router = DefaultRouter()
router.register('regions', views.RegionViewSet, basename='regions')
router.register('communes', views.CommuneViewSet, basename='communes')
router.register('menages', views.MenageViewSet, basename='menages')
router.register('agents', views.AgentViewSet, basename='agents')
router.register('ongs', views.OngViewSet, basename='ongs')

commune_router = NestedDefaultRouter(router, 'communes', lookup='commune')
commune_router.register('streets', views.CommuneStreetViewSet,
                        basename='commune-streets')

region_router = NestedDefaultRouter(router, 'regions', lookup='region')
region_router.register(
    'departments', views.RegionDepartmentViewSet, basename='region-departments')

menage_router = NestedDefaultRouter(router, 'menages', lookup='menage')
menage_router.register(
    'peoples', views.MenagePeopleViewSet, basename='menage-peoples')

people_router = NestedDefaultRouter(menage_router, 'peoples', lookup='people')
people_router.register(
    'vulnerabilities', views.PeopleVulnerabilityViewSet, basename='people-vulnerabilities')

# pprint(commune_router.urls)

urlpatterns = [
    path('test', views.test),

] \
    + router.urls\
    + commune_router.urls\
    + region_router.urls\
    + menage_router.urls \
    + people_router.urls
