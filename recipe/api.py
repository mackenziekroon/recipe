from recipe.models import Recipe, Allergens
from rest_framework import viewsets, permissions
from .serializers import RecipeSerializer, AllergenSerializer

#Recipe Viewset
class RecipeViewSet(viewsets.ModelViewSet) :
  queryset = Recipe.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = RecipeSerializer

#Allergen Viewset
class AllergenViewSet(viewsets.ModelViewSet) :
  queryset = Recipe.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = AllergenSerializer
