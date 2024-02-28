from django.contrib import admin
from .models.agent import Agent
from .models.commune import Commune
from .models.menage import Menage
from .models.people import People
from .models.street import Street
from .models.vulnerability import Vulnerability

admin.site.register(Agent)
admin.site.register(Commune)
admin.site.register(Menage)
admin.site.register(People)
admin.site.register(Street)
admin.site.register(Vulnerability)