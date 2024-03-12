from django.contrib import admin
from . import models


admin.site.site_header = 'Menage API'
# Register your models here.


@admin.register(models.Agent)
class AdminAgent(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'email', 'phone', 'created_at', 'id']
    # list_editable = ['last_name', 'email']
    search_fields = ['first_name', 'last_name']
    list_per_page = 10


@admin.register(models.Street)
class AdminStreet(admin.ModelAdmin):
    list_display = ['name',
                    'city', 'created_at', 'commune', 'id']
    search_fields = ['name']
    autocomplete_fields = ['commune']
    list_per_page = 10


@admin.register(models.Menage)
class AdminMenage(admin.ModelAdmin):
    list_display = ['name',
                    'description', 'created_at', 'street', 'registered_by', 'id']
    search_fields = ['name']
    autocomplete_fields = ['street', 'registered_by']
    list_per_page = 10


@admin.register(models.Department)
class DepartmentCommune(admin.ModelAdmin):
    list_display = ['name', 'code', 'created_at', 'id']
    list_editable = ['code']
    list_per_page = 10
    autocomplete_fields = ['region']
    search_fields = ['name']


@admin.register(models.Region)
class AdminRegion(admin.ModelAdmin):
    list_display = ['name', 'code', 'created_at', 'id']
    list_editable = ['code']
    list_per_page = 10
    search_fields = ['name']


@admin.register(models.Commune)
class AdminCommune(admin.ModelAdmin):
    list_display = ['name', 'code',
                    'city', 'created_at', 'department', 'id']
    search_fields = ['name']
    autocomplete_fields = ['department']
    list_per_page = 10


@admin.register(models.Vulnerability)
class AdminVulnerability(admin.ModelAdmin):
    list_display = ['name', 'description', 'created_at', 'id']
    search_fields = ['name']
    list_per_page = 10


@admin.register(models.People)
class AdminPeople(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'email', 'phone', 'sex', 'status', 'created_at',  'id',]
    search_fields = ['first_name', 'last_name']
    list_per_page = 10
    autocomplete_fields = ['menage']


@admin.register(models.Ong)
class AdminOng(admin.ModelAdmin):
    search_fields = ['name']
    list_per_page = 10
