from django.db import models

# Enumerations


class SexChoices(models.TextChoices):
    MALE = 'M'
    FEMALE = 'F'


class PeopleStatusChoices(models.TextChoices):
    ALIVE = '1'
    DEAD = '0'

# Create your models here.


class Agent(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name


class Street(models.Model):
    label = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.label


class Menage(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    street = models.ForeignKey(Street, on_delete=models.PROTECT)
    registered_by = models.ForeignKey(
        Agent, null=True, on_delete=models.SET_NULL)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Commune(models.Model):
    label = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    street = models.ForeignKey(Street, on_delete=models.PROTECT)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.label


class Vulnerability(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class People(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
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

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relationship
    vulnerabilities = models.ManyToManyField(Vulnerability)
    menage = models.ForeignKey(Menage, on_delete=models.PROTECT)

    def __str__(self):
        return self.first_name
