from django.contrib import admin
from django.urls import path
from .modules.agents.views import AgentsList

urlpatterns = [
    path('agents/', AgentsList.as_view(), name='agents-list'),
]
