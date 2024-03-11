from rest_framework import serializers
from . import models


class DepartmentSerilizer(serializers.ModelSerializer):
    # region = RegionSerilizer()
    class Meta:
        model = models.Department
        fields = ['id', 'name', 'code']

    def create(self, validated_data):
        region_id = self.context['region_id']
        return models.Department.objects.create(region_id=region_id, **validated_data)


class RegionSerilizer(serializers.ModelSerializer):
    # departments = DepartmentSerilizer(many=True)

    class Meta:
        model = models.Region
        fields = ['id', 'name', 'code', 'departments']


class StreetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Street
        fields = ['id', 'name', 'city']

    def create(self, validated_data):
        commune_id = self.context['commune_id']
        return models.Street.objects.create(commune_id=commune_id, **validated_data)


class CommuneSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Commune
        fields = ['id', 'name', 'code', 'city', 'department', 'streets']
