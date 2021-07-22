from rest_framework import serializers
from recipe.models import Recipe, Allergens

#Recipe Serializer
class RecipeSerializer(serializers.ModelSerializer) :
  class Meta:
    model = Recipe
    fields = '__all__'

#Allergen Serializer
class AllergenSerializer(serializers.ModelSerializer) :
  class Meta:
    model = Allergens
    fields = '__all__'
