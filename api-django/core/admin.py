from django.contrib import admin
from . import models


admin.site.site_header = 'Menage API'
# Register your models here.


@admin.register(models.Agent)
class AdminAgent(admin.ModelAdmin):
    list_display = ['first_name', 'last_name']
    search_fields = ['first_name', 'last_name']


@admin.register(models.Street)
class AdminStreet(admin.ModelAdmin):
    search_fields = ['name',]


@admin.register(models.Menage)
class AdminMenage(admin.ModelAdmin):
    search_fields = ['name']
    autocomplete_fields = ['street', 'registered_by']


@admin.register(models.Department)
class DepartmentCommune(admin.ModelAdmin):
    autocomplete_fields = ['region']
    search_fields = ['name']


@admin.register(models.Region)
class AdminRegion(admin.ModelAdmin):
    search_fields = ['name']


@admin.register(models.Commune)
class AdminCommune(admin.ModelAdmin):
    autocomplete_fields = ['department']
    search_fields = ['label']


@admin.register(models.Vulnerability)
class AdminVulnerability(admin.ModelAdmin):
    search_fields = ['name']


@admin.register(models.People)
class AdminPeople(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name']
    autocomplete_fields = ['menage']


@admin.register(models.Ong)
class AdminOng(admin.ModelAdmin):
    search_fields = ['name']
