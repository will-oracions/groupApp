from django.db import models

class Sex(models.TextChoices):
        FRESHMAN = 'M'
        SOPHOMORE = 'F'

class People(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    # status = null
    year_in_school = models.CharField(
            max_length=1,
            choices=Sex.choices)
    has_cni = models.BooleanField(False)
    has_birth_certificat = models.BooleanField(False)
    is_utochtone = models.BooleanField(False)
    is_handicape = models.BooleanField(False)
    is_menage_chief = models.BooleanField(False)
    
    def __str__(self):
        return self.first_name