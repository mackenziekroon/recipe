from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Customer(models.Model) :
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  email = models.EmailField(unique=True)
  childfirstname = models.CharField(max_length=255)
  childlastname = models.CharField(max_length=255)
  allergens = ArrayField(models.CharField(max_length=255), default=list)

class Recipe(models.Model) :
  name = models.CharField(max_length=255)
  allergens = ArrayField(models.CharField(max_length=255), default=list)


class Allergens(models.Model) :
  name = models.CharField(max_length=255)
