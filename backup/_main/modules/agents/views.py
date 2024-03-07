from rest_framework import generics
from .agent import Agent
from _main.serializers.serializers import AgentSerializer


class AgentsList(generics.ListCreateAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer
