from django.db import models

class Menage(models.Model):
    name = models.CharField(max_length=200)
    desc = models.CharField(max_length=1000)

    def __str__(self):
        return self.name