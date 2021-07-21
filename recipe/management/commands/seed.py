#from recipe.models import Recipe
#from django.core.management.base import BaseCommand
#import requests


#def get_recipes() :
 # url: 'https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/'
  #res = requests.get(url , headers={'Content-Type' : 'application/json'})
  #recipe = res.json()
  #print("recipe")
  #return recipe

  #def seed_recipe() :
   # for i in get_recipes():
    #  recipe = Recipe(
      #  name=i["name"],
        #allergens=i['allergens']
    #  )
    #  recipe.save()

#class Command(BaseCommand):
 # def handle(self, *args, **options):
  #  seed_recipe()
    # clear_data()
   # print("completed")
