from django.urls import include
from django.urls import path

app_name = "v1"
urlpatterns = [
    path("users/", include("apis.v1.users.urls")),
]
