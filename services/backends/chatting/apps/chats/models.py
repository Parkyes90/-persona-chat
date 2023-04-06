from django.db import models
from django_extensions.db.models import TimeStampedModel


class Channel(TimeStampedModel):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="channels"
    )


class Message(TimeStampedModel):
    channel = models.ForeignKey(
        "chats.Channel", on_delete=models.CASCADE, related_name="messages"
    )
    user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="messages"
    )
    text = models.TextField()
