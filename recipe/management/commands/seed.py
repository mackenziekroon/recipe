from recipe.models import Recipe, Allergens
from django.core.management.base import BaseCommand
import requests


def get_recipe():
  url = 'https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/'
  res = requests.get(url , headers={'Content-Type' : 'application/json'})
  recipe = res.json()
  print(recipe)
  return recipe

def get_allergens():
  url = 'https://60f5adf918254c00176dffc8.mockapi.io/api/v1/allergens/'
  res = requests.get(url , headers={'Content-Type' : 'application/json'})
  allergens = res.json()
  print(allergens)
  return allergens

def seed_recipe():
  for i in get_recipe():
      recipe = Recipe(
          name=i["name"],
      )
      recipe.save()

def seed_allergens():
  for i in get_allergens():
      allergens = Allergens(
        name=i["name"],
      )
      allergens.save()

seed_recipe()
seed_allergens()


class Command(BaseCommand):
  def handle(self, *args, **options):
      print("completed")
