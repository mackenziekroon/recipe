from rest_framework import serializers
from recipe.models import Recipe, Allergens, Customer

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

#Customer Serializer
class CustomerSerializer(serializers.ModelSerializer) :
  class Meta:
    model = Customer
    fields = '__all__'
