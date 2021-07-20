from django.db import models

# Create your models here.
class Recipe(models.Model) :
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  email = models.EmailField(max_length=255, unique=True)
  childfirstname = models.CharField(max_length=255)
  childlastname = models.CharField(max_length=255)
