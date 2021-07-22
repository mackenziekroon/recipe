from rest_framework import routers
from .api import RecipeViewSet, AllergenViewSet, CustomerViewSet

router = routers.DefaultRouter()
router.register('api/recipe', RecipeViewSet, 'recipe' )
router.register('api/allergen', AllergenViewSet, 'allergen')
router.register('api/customer', CustomerViewSet, 'customer')


urlpatterns = router.urls
