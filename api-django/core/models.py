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
    email = models.EmailField()
    phone = models.CharField(max_length=255, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name


class Region(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Department(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=255)

    region = models.ForeignKey(
        Region, on_delete=models.PROTECT, related_name='departments')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Commune(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    city = models.CharField(max_length=255, null=True)

    department = models.ForeignKey(Department, on_delete=models.PROTECT)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Street(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    commune = models.ForeignKey(
        Commune, on_delete=models.PROTECT, null=True, related_name='streets')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


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
    email = models.EmailField(null=True)
    birth_date = models.DateField()
    citizen = models.CharField(max_length=255)
    occupation = models.CharField(max_length=255, null=True)
    phone = models.CharField(max_length=255, null=True)

    has_cni = models.BooleanField(default=False)
    has_birth_certificat = models.BooleanField(default=False)
    is_autochtone = models.BooleanField(default=False)
    is_handicape = models.BooleanField(default=False)
    is_menage_chief = models.BooleanField(default=False)

    status = models.CharField(
        max_length=1,
        choices=PeopleStatusChoices.choices,
        default=PeopleStatusChoices.ALIVE)
    sex = models.CharField(
        max_length=1,
        choices=SexChoices.choices)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relationship
    vulnerabilities = models.ManyToManyField(
        Vulnerability, related_name='peoples')
    menage = models.ForeignKey(Menage, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Ong(models.Model):
    name = models.CharField(max_length=255)
    social_reason = models.CharField(max_length=1000)
