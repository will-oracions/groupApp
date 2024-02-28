from django.db import models

class Street(models.Model):
    label = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name