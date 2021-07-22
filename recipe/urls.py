from rest_framework import routers
from .api import RecipeViewSet, AllergenViewSet

router = routers.DefaultRouter()
router.register('api/recipe', RecipeViewSet, 'recipe' )
router.register('api/allergen', AllergenViewSet, 'allergen')


urlpatterns = router.urls
