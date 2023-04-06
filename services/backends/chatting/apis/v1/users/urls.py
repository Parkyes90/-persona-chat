from rest_framework.routers import DefaultRouter

from .views import UserAPIViewSet

app_name = "users"
router = DefaultRouter()
router.register("", UserAPIViewSet, basename="users")
urlpatterns = router.urls
