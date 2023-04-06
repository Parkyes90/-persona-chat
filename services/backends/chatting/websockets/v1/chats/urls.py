from channels.routing import URLRouter
from django.urls import re_path

from .consumers import ChatConsumer

websocket_urlpatterns = URLRouter(
    [
        re_path(r"chats/(?P<channel_id>\d+)/$", ChatConsumer.as_asgi()),
    ]
)
websocket_urlpatterns2 = [
    re_path(r"ws/v1/chats/(?P<channel_id>\d+)/$", ChatConsumer.as_asgi()),
]
