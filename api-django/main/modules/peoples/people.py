from django.db import models

class Sex(models.TextChoices):
        MALE = 'M'
        FEMALE = 'F'

class Status(models.TextChoices):
        ALIVE = '1'
        DEAD = '0'

class People(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    status = models.CharField(
        max_length=1,
        choices=Status.choices,
        default=Status.ALIVE)
    sex = models.CharField(
            max_length=1,
            choices=Sex.choices,
            default=Sex.MALE)
    has_cni = models.BooleanField(default=False)
    has_birth_certificat = models.BooleanField(default=False)
    is_utochtone = models.BooleanField(default=False)
    is_handicape = models.BooleanField(default=False)
    is_menage_chief = models.BooleanField(default=False)
    
    def __str__(self):
        return self.first_name