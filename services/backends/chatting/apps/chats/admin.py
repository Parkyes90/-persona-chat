from django.contrib import admin

from .models import Channel, Message


@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "user", "created")


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("id", "channel", "user", "created")
