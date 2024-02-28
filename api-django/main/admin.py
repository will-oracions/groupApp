from django.contrib import admin
from .modules.agents.agent import Agent
from .modules.communes.commune import Commune
from .modules.menages.menage import Menage
from .modules.peoples.people import People
from .modules.streets.street import Street
from .modules.vulnerabilities.vulnerability import Vulnerability

admin.site.register(Agent)
admin.site.register(Commune)
admin.site.register(Menage)
admin.site.register(People)
admin.site.register(Street)
admin.site.register(Vulnerability)