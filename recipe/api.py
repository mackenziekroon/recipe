from recipe.models import Recipe, Allergens, Customer
from rest_framework import viewsets, permissions
from .serializers import RecipeSerializer, AllergenSerializer, CustomerSerializer

#Recipe Viewset
class RecipeViewSet(viewsets.ModelViewSet) :
  #exclude_list = ['milk', 'soybean']
  #print(exclude_list)
  #queryset = Recipe.objects.exclude(allergens=['milk'])
  queryset = Recipe.objects.all()
  print(queryset)
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = RecipeSerializer

#Allergen Viewset
class AllergenViewSet(viewsets.ModelViewSet) :
  queryset = Allergens.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = AllergenSerializer

#Customer Viewset
class CustomerViewSet(viewsets.ModelViewSet) :
  queryset = Customer.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CustomerSerializer
