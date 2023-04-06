from django.urls import include
from django.urls import path

app_name = "apis"
urlpatterns = [
    path("v1/", include("apis.v1.urls")),
]
