from django.db import models

# Create your models here.
class Customer(models.Model) :
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  email = models.EmailField(unique=True)
  childfirstname = models.CharField(max_length=255)
  childlastname = models.CharField(max_length=255)

class Recipe(models.Model) :
  name = models.CharField(max_length=255)

 # allergens = ArrayField(ArrayField(models.IntegerField()))

class Allergens(models.Model) :
  ALLERGEN_CHOICES = [
    ('milk', 'Milk'),
    ('eggs', 'Eggs'),
    ('soybean', 'Soybean'),
    ('fish', 'Fish'),
    ('shellfish', "Shellfish"),
    ('treenuts', 'Treenuts'),
    ('peanuts', "Peanuts"),
    ('wheat', "Wheat")
  ]
  allergen = models.CharField(max_length=9, choices=ALLERGEN_CHOICES)
