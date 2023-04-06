from channels.generic.websocket import AsyncWebsocketConsumer

from apps.chats.models import Channel


class ChatConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(self, *args, **kwargs)
        self.user = None
        self.group_name = None
        self.channel = None
        self.channel_id = None

    async def connect(self):
        try:
            self.user = self.scope["user"]
        except KeyError:
            return await self.close()

        if self.user.is_anonymous:
            return await self.close()

        try:
            self.channel = Channel.objects.get(
                id=int(self.scope["url_route"]["kwargs"]["channel_id"]), user=self.user
            )
        except Channel.DoesNotExist:
            return await self.close()

        await self.channel_layer.group_add(self.channel.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, code):
        if self.channel:
            await self.channel_layer.group_discard(
                self.channel.group_name, self.channel_name
            )
