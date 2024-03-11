from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
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
    # queryset = models.Department.objects.all()
    serializer_class = serializers.DepartmentSerilizer

    def get_queryset(self):
        return models.Department.objects.filter(region_id=self.kwargs['region_pk'])

    def get_serializer_context(self):
        return {'region_id': self.kwargs['region_pk']}


class CommuneStreetViewSet(ModelViewSet):
    serializer_class = serializers.StreetSerializer

    def get_queryset(self):
        return models.Street.objects.filter(commune_id=self.kwargs['commune_pk'])

    def get_serializer_context(self):
        return {'commune_id': self.kwargs['commune_pk']}


class CommuneViewSet(ModelViewSet):
    queryset = models.Commune.objects.all()
    serializer_class = serializers.CommuneSerializer


class MenageViewSet(ModelViewSet):
    queryset = models.Menage.objects.all()
    serializer_class = serializers.MenageSerializer


class MenagePeopleViewSet(ModelViewSet):
    # queryset = models.People.objects.all()
    serializer_class = serializers.PeopleSerializer

    def get_queryset(self):
        menage_id = self.kwargs['menage_pk']
        return models.People.objects.filter(menage_id=menage_id)

    def get_serializer_context(self):
        return {'menage_id': self.kwargs['menage_pk']}


class PeopleVulnerabilityViewSet(ModelViewSet):
    serializer_class = serializers.VulnerabilitySerializer

    def get_queryset(self):
        people_id = self.kwargs['people_pk']
        return models.Vulnerability.objects.filter(peoples__id__contains=people_id).all()

    def get_serializer_context(self):
        return {'people_id': self.kwargs['people_pk']}


class AgentViewSet(ModelViewSet):
    queryset = models.Agent.objects.all()
    serializer_class = serializers.AgentSerializer


class OngViewSet(ModelViewSet):
    queryset = models.Ong.objects.all()
    serializer_class = serializers.OngSerializer
