from recipe.models import Recipe, Allergens
from django.core.management.base import BaseCommand
import requests


def get_recipe():
  url = 'https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/'
  res = requests.get(url , headers={'Content-Type' : 'application/json'})
  recipe = res.json()
  return recipe

def get_allergens():
  url = 'https://60f5adf918254c00176dffc8.mockapi.io/api/v1/allergens/'
  res = requests.get(url , headers={'Content-Type' : 'application/json'})
  allergies = res.json()
  return allergies


def clear_data():
    """Deletes all the table data"""
    Recipe.objects.all().delete()
    Allergens.objects.all().delete()

def seed_recipe():
  for i in get_recipe():
      recipe = Recipe(
          name=i["name"],
          allergens=i["allergens"],
      )
      recipe.save()

def seed_allergens():
  for i in get_allergens():
      allergies = Allergens(
        name=i["name"],
      )
      allergies.save()

seed_recipe()
seed_allergens()
#clear_data()


class Command(BaseCommand):
  def handle(self, *args, **options):
      print("completed")
