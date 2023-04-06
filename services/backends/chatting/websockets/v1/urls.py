from channels.routing import URLRouter
from django.urls import path

from .chats.urls import websocket_urlpatterns as chats_websocket_urlpatterns

websocket_urlpatterns = URLRouter(
    [
        path("v1/", chats_websocket_urlpatterns),
    ]
)
