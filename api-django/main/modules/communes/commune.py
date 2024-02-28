from django.db import models

class Commune(models.Model):
    label = models.CharField(max_length=200)
    code = models.CharField(max_length=1000)

    def __str__(self):
        return self.code