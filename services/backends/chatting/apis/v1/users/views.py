from django.contrib.auth import logout
from drf_spectacular.utils import extend_schema
from rest_framework import mixins, status
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from apis.v1.users.serializers import V1SignUpUserSerializer, V1LoginUserSerializer


class UserAPIViewSet(GenericViewSet, mixins.CreateModelMixin):
    serializer_class = V1SignUpUserSerializer

    def get_permissions(self):
        if self.action in {"logout"}:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in {"create"}:
            return V1SignUpUserSerializer
        if self.action in {"login"}:
            return V1LoginUserSerializer
        return V1SignUpUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    @action(detail=False, methods=["POST"])
    def login(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    @extend_schema(request=None, responses={status.HTTP_204_NO_CONTENT: None})
    @action(detail=False, methods=["POST"])
    def logout(self, request, *args, **kwargs):
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
