from django.db import models

# Create your models here.


class Agent(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name


class Commune(models.Model):
    label = models.CharField(max_length=200)
    code = models.CharField(max_length=1000)

    def __str__(self):
        return self.label


class Menage(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name


class SexChoices(models.TextChoices):
    MALE = 'M'
    FEMALE = 'F'


class PeopleStatusChoices(models.TextChoices):
    ALIVE = '1'
    DEAD = '0'


class People(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    status = models.CharField(
        max_length=1,
        choices=PeopleStatusChoices.choices,
        default=PeopleStatusChoices.ALIVE)
    sex = models.CharField(
        max_length=1,
        choices=SexChoices.choices)
    has_cni = models.BooleanField(default=False)
    has_birth_certificat = models.BooleanField(default=False)
    is_autochtone = models.BooleanField(default=False)
    is_handicape = models.BooleanField(default=False)
    is_menage_chief = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name


class Street(models.Model):
    label = models.CharField(max_length=200)

    def __str__(self):
        return self.label


class Vulnerability(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
