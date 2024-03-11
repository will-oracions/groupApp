from rest_framework import serializers
from django.shortcuts import get_object_or_404
from pprint import pprint

from . import models

common_fields = ['id', 'created_at', 'updated_at']


class DepartmentSerilizer(serializers.ModelSerializer):
    # region = RegionSerilizer()
    class Meta:
        model = models.Department
        fields = common_fields + ['id', 'name', 'code']

    def create(self, validated_data):
        region_id = self.context['region_id']
        return models.Department.objects.create(region_id=region_id, **validated_data)


class RegionSerilizer(serializers.ModelSerializer):
    # departments = DepartmentSerilizer(many=True)

    class Meta:
        model = models.Region
        fields = common_fields + ['id', 'name', 'code', 'departments']


class StreetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Street
        fields = common_fields + ['id', 'name', 'city']

    def create(self, validated_data):
        commune_id = self.context['commune_id']
        return models.Street.objects.create(commune_id=commune_id, **validated_data)


class MenageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Menage
        fields = common_fields + ['id', 'name', 'description', 'street']


class CommuneSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Commune
        fields = common_fields + ['id', 'name',
                                  'code', 'city', 'department', 'streets']


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.People
        fields = common_fields + ['first_name', 'last_name', 'email', 'birth_date', 'citizen', 'occupation', 'phone',
                                  'has_cni', 'has_birth_certificat', 'is_autochtone', 'is_handicape', 'is_menage_chief', 'status', 'sex']

    def create(self, validated_data):
        menage_id = self.context['menage_id']
        return models.People.objects.create(menage_id=menage_id, **validated_data)


class VulnerabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vulnerability
        fields = common_fields + ['name', 'description']

    def create(self, validated_data):
        people_id = self.context['people_id']
        # people = get_object_or_404(models.People, pk=people_id)
        vulnerability = models.Vulnerability.objects.create(**validated_data)
        vulnerability.peoples.set(people_id)
        vulnerability.save()
        return vulnerability
