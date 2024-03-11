from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from pprint import pprint

from . import models
from . import serializers

# Create your views here.


def test(request):
    return HttpResponse('Hello')


class RegionViewSet(ModelViewSet):
    queryset = models.Region.objects.all()
    serializer_class = serializers.RegionSerilizer


class RegionDepartmentViewSet(ModelViewSet):
    queryset = models.Department.objects.all()
    serializer_class = serializers.DepartmentSerilizer

    def get_serializer_context(self):
        return {'region_id': self.kwargs['region_pk']}


class CommuneStreetViewSet(ModelViewSet):
    serializer_class = serializers.StreetSerializer

    def get_queryset(self):
        pprint(self.kwargs)
        return models.Street.objects.filter(commune_id=self.kwargs['commune_pk'])

    def get_serializer_context(self):
        return {'commune_id': self.kwargs['commune_pk']}


class CommuneViewSet(ModelViewSet):
    queryset = models.Commune.objects.all()
    serializer_class = serializers.CommuneSerializer
