from django.contrib import admin
from .models import Agent, Street, Menage, Commune, Vulnerability, People, Ong


admin.site.site_header = 'Menage API'
# Register your models here.


@admin.register(Agent)
class AdminAgent(admin.ModelAdmin):
    list_display = ['first_name', 'last_name']
    search_fields = ['first_name', 'last_name']


@admin.register(Street)
class AdminStreet(admin.ModelAdmin):
    search_fields = ['name',]


@admin.register(Menage)
class AdminMenage(admin.ModelAdmin):
    search_fields = ['name']
    autocomplete_fields = ['street', 'registered_by']


@admin.register(Commune)
class AdminCommune(admin.ModelAdmin):
    search_fields = ['label']


@admin.register(Vulnerability)
class AdminVulnerability(admin.ModelAdmin):
    search_fields = ['name']


@admin.register(People)
class AdminPeople(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name']
    autocomplete_fields = ['menage']


@admin.register(Ong)
class AdminOng(admin.ModelAdmin):
    search_fields = ['name']
