from channels.routing import URLRouter
from django.urls import path

from .v1.urls import websocket_urlpatterns as v1_websocket_urlpatterns

websocket_urlpatterns = URLRouter(
    [
        path("ws/", v1_websocket_urlpatterns),
    ]
)
