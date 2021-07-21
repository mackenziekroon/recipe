from rest_framework import routers
from .api import RecipeViewSet

router = routers.DefaultRouter()
router.register('api/recipe', RecipeViewSet, 'recipe' )


urlpatterns = router.urls
